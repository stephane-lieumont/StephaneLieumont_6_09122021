// CLASS API : Recupere les données dans le fichier JSON avec la méthode fetch
export default class Api {
  /**
   * @param {string} url 
   */
  constructor(url) {
    this._url = url
  }

  // requete API simulation avec getPhotographers
  async getPhotographers() {
    return fetch(this._url)
      .then(response => response.json())
      .then(response => response.photographers )
      .catch(err => {
        throw new Error('La requete api getPhotographer a échoué : ', err)
      })
  }

  // requete API simulation avec getPhotographer by ID
  async getPhotographerById(userId) {
    return fetch(this._url)
      .then(response => response.json())
      .then(response => {
        return response.photographers.filter(photographer => photographer.id === userId)[0]
      })
      .catch(err => {
        throw new Error('La requete api getPhotographer a échoué : ', err)
      })
  }

  // requete API simulation get tous les media avec l'id du photographe
  async getPortfolioByUserId(userId) {
    return fetch(this._url)
    .then(response => response.json())
    .then(response => {
      return response.media.filter(media => media.photographerId === userId)
    } )
    .catch(err => {
      throw new Error('La requete api getPhotographer a échoué : ', err)
    })
  }
}
