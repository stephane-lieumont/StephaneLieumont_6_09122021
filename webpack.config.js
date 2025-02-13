// Chargement des plugins
const TerserPlugin = require('terser-webpack-plugin') // Minify JS
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // Minify Css
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // Clean derectories before generate files
const { WebpackManifestPlugin } = require('webpack-manifest-plugin') // Génere un manifest.json pour la mise en cache des fichiers
const HtmlWebpackPlugin = require('html-webpack-plugin') // Inject les liens dynamique des fichier hashé
const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')

// Verification de l'environnement de developpement
const dev = process.env.NODE_ENV === 'development'

const config = {
  mode: process.env.NODE_ENV,
  watch: dev,
  entry: {
    app_index: ['./scripts/index.js', './scss/style_index.scss'],
    app_profil: ['./scripts/profil.js', './scss/style_profil.scss']
  },
  output: {
    filename: dev ? 'js/[name].js' : 'js/[name][chunkhash:8].js',
    path: path.resolve(__dirname, 'public/'),
    assetModuleFilename: 'assets/images/[name][ext][query]'
  },
  devtool: dev ? 'eval-cheap-module-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(svg|png|jpe?g|gif)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]'
        }
      },
      {
        test: /\.css/,
        type: 'asset/resource',
        generator: {
          filename: 'css/[name][ext]'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: false
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false, // tester la configuration "true" avant de clean
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [
        '!assets/**',
        '!data/**',
        'js/*',
        'css/*',
        '*.html',
        '!css/normalize.css'
      ]
    }),
    new MiniCssExtractPlugin({
      // cache managment avec hash en prod
      filename: dev ? 'css/[name].css' : 'css/[name][contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      title: 'FishEye | Accueil',
      template: 'templates/index.template.ejs',
      chunks: ['app_index']
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'photographer.html',
      title: 'FishEye | Photographer',
      template: 'templates/photographer.template.ejs',
      chunks: ['app_profil']
    }),
    new ESLintPlugin({
      overrideConfigFile: path.resolve(__dirname, '.eslintrc')
    })
  ]
}

// Ajout de plugins seulement si mode production
if (!dev) {
  config.optimization = {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
  config.plugins.push(new WebpackManifestPlugin({
    fileName: '../templates/manifest.json',
    publicPath: ''
  }))
}

module.exports = config
