(()=>{var t={757:(t,r,e)=>{t.exports=e(666)},666:t=>{var r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,e){return t[r]=e}}function u(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,i=Object.create(o.prototype),a=new $(n||[]);return i._invoke=function(t,r,e){var n=p;return function(o,i){if(n===f)throw new Error("Generator is already running");if(n===g){if("throw"===o)throw i;return O()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=P(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===p)throw n=g,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=f;var h=s(t,r,e);if("normal"===h.type){if(n=e.done?g:l,h.arg===d)continue;return{value:h.arg,done:e.done}}"throw"===h.type&&(n=g,e.method="throw",e.arg=h.arg)}}}(t,e,a),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p="suspendedStart",l="suspendedYield",f="executing",g="completed",d={};function y(){}function _(){}function v(){}var m={};h(m,i,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(M([])));k&&k!==e&&n.call(k,i)&&(m=k);var L=v.prototype=y.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){function e(o,i,a,c){var h=s(t[o],t,i);if("throw"!==h.type){var u=h.arg,p=u.value;return p&&"object"==typeof p&&n.call(p,"__await")?r.resolve(p.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(p).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,c)}))}c(h.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function P(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,P(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function M(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:r,done:!0}}return _.prototype=v,h(L,"constructor",v),h(v,"constructor",_),_.displayName=h(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===_||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,h(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},b(x.prototype),h(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new x(u(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(L),h(L,c,"Generator"),h(L,i,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=M,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var h=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(h&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{"use strict";function t(t,r,e,n,o,i,a){try{var c=t[i](a),h=c.value}catch(t){return void e(t)}c.done?r(h):Promise.resolve(h).then(n,o)}function r(r){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=r.apply(e,n);function c(r){t(a,o,i,c,h,"next",r)}function h(r){t(a,o,i,c,h,"throw",r)}c(void 0)}))}}var n=e(757),o=e.n(n);function i(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function a(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,r,e){return r&&a(t.prototype,r),e&&a(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}var h=function(){function t(r){i(this,t),this._url=r}var e,n,a,h;return c(t,[{key:"getPhotographers",value:(h=r(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(this._url).then((function(t){return t.json()})).then((function(t){return t.photographers})).catch((function(t){throw new Error("La requete api getPhotographer a échoué : ",t)})));case 1:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)})},{key:"getPhotographerById",value:(a=r(o().mark((function t(r){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(this._url).then((function(t){return t.json()})).then((function(t){return t.photographers.filter((function(t){return t.id===r}))[0]})).catch((function(t){throw new Error("La requete api getPhotographer a échoué : ",t)})));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return a.apply(this,arguments)})},{key:"getPortfolioByUserId",value:(n=r(o().mark((function t(r){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(this._url).then((function(t){return t.json()})).then((function(t){return t.media.filter((function(t){return t.photographerId===r}))})).catch((function(t){throw new Error("La requete api getPhotographer a échoué : ",t)})));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"getAllMedias",value:(e=r(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(this._url).then((function(t){return t.json()})).then((function(t){return t.media})).catch((function(t){throw new Error("La requete api getPhotographer a échoué : ",t)})));case 1:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),t}(),u=function(){function t(r){i(this,t),this._profilPath="assets/photographers/",this._id=r.id,this._name=r.name,this._city=r.city,this._country=r.country,this._tagline=r.tagline,this._price=r.price,this._portrait=r.portrait,this._portfolio=[],this._templatePhotographer=null,this._templatePortfolio=null,this._templateModal=null,this._templateFilter=null}return c(t,[{key:"id",get:function(){return this._id}},{key:"name",get:function(){return this._name}},{key:"city",get:function(){return this._city}},{key:"country",get:function(){return this._country}},{key:"tagline",get:function(){return this._tagline}},{key:"price",get:function(){return this._price}},{key:"portrait",get:function(){return this._profilPath+this._portrait}},{key:"portfolio",get:function(){return this._portfolio},set:function(t){this._portfolio=t}},{key:"likes",get:function(){return this._caluculateLikes()}},{key:"templatePhotographer",get:function(){return this._templatePhotographer},set:function(t){this._templatePhotographer=t}},{key:"templatePortfolio",get:function(){return this._templatePortfolio},set:function(t){this._templatePortfolio=t}},{key:"templateModal",get:function(){return this._templateModal},set:function(t){this._templateModal=t}},{key:"templateFilter",get:function(){return this._templateFilter},set:function(t){this._templateFilter=t}},{key:"addPortfolioMedia",value:function(t){this._portfolio.push(t),this._likes+=t.likes}},{key:"removePortfolioMedia",value:function(t){this._portfolio=this._portfolio.filter((function(r){return r!==t})),this._likes-=t.likes}},{key:"_caluculateLikes",value:function(){var t=0;return this._portfolio.forEach((function(r){t+=r.likes})),t}}]),t}(),s=function(){function t(r){i(this,t),this._photographer=r,this.$wrapperCard=null,this.$wrapperHeader=null,this.$wrapperLink=null,this.$buttonModal=null}return c(t,[{key:"btnModal",get:function(){return this.$buttonModal}},{key:"createPhotographerCard",value:function(){this.$wrapperCard=document.createElement("li");var t='      \n      <article class="photographer">\n        <a href="photographer.html?id='.concat(this._photographer.id,'" aria-label="').concat(this._photographer.name,'">\n          <div class="photographer__cover">\n            <img width="100" src="').concat(this._photographer.portrait,'" alt="').concat(this._photographer.name,'" />\n          </div>        \n          <h2 class="photographer__title">').concat(this._photographer.name,'</h2>        \n        </a>\n          <ul class="photographer__infos">\n            <li class="photographer__infos__local text--primary">').concat(this._photographer.city,", ").concat(this._photographer.country,'</li>\n            <li class="photographer__infos__tagline">').concat(this._photographer.tagline,'</li>\n            <li class="photographer__infos__price text--grey">').concat(this._photographer.price,"€/jour</li>\n          </ul>\n      </article>      \n    ");return this.$wrapperCard.innerHTML=t,this.$wrapperCard}},{key:"createPhotographerHeader",value:function(){this.$wrapperHeader=document.createElement("div"),this.$wrapperHeader.classList.add("photographer-header");var t='\n      <div class="photographer__content">\n        <h1 class="photographer__content__title display-h2">'.concat(this._photographer.name,'</h1>\n        <p class="photographer__content__description">\n          <span class="photographer__content__description__local text--primary">').concat(this._photographer.city,'</span>\n          <span class="photographer__content__description__tag text--grey">').concat(this._photographer.tagline,'</span>\n        </p>\n      </div>\n      <div class="photographer__actions">\n        <button class="button" aria-label="Contact Me" aria-haspopup="dialog" aria-controls="contact-modal">Contactez-moi</button>\n      </div>\n      <div class="photographer__cover">\n        <img width="100" src="').concat(this._photographer.portrait,'" alt="Mimi Keel">\n      </div>\n    ');return this.$wrapperHeader.innerHTML=t,this.$buttonModal=this.$wrapperHeader.querySelector('[aria-controls="contact-modal"]'),this.$wrapperHeader}},{key:"createPhotographerContentLink",value:function(){this.$wrapperLink=document.createElement("aside"),this.$wrapperLink.classList.add("photographer-content-link");var t='\n      <div class="photographer-content-link__like">'.concat(this._photographer.likes,'</div>\n      <div class="photographer-content-link__price">').concat(this._photographer.price,"€ / jour</div>\n    ");return this.$wrapperLink.innerHTML=t,this.$wrapperLink}},{key:"refreshPhotographerContentLink",value:function(){if(!this.$wrapperLink)throw new Error("$wrapperLink not exist yet, createPhotographerContentLink before");this.$wrapperLink.querySelector(".photographer-content-link__like").innerHTML="".concat(this._photographer.likes),this.$wrapperLink.querySelector(".photographer-content-link__price").innerHTML="".concat(this._photographer.price," € / jour")}}]),t}();function p(){return(p=r(o().mark((function t(){var r,e,n,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.querySelector("#photographer_section"),e=new h("data/photographers_new.json"),t.next=4,e.getPhotographers();case 4:n=t.sent,i=[],n.forEach((function(t){var r=new u(t,"type1");i.push(r)})),i.forEach((function(t){var e=new s(t);r.appendChild(e.createPhotographerCard())}));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){p.apply(this,arguments)}()})()})();
//# sourceMappingURL=app_indexb99fc620.js.map