class Swapi {
   constructor(params) {
      const { form, elPre, elController, elId, elLoader } = params;
      const elForm = document.querySelector(`.${form}`);

      elForm.addEventListener('submit', this.formSubmit.bind(this));

      this.elPre = elPre;
      this.elController = elController;
      this.elId = elId;
      this.elLoader = elLoader;
   }

   async formSubmit(e) {
      e.preventDefault();
      this.elLoader.classList.remove('d-none');
      const { getSwapiData } = await import('./utils.js');
      const formURL = new FormData(e.target).get('url');
      const regEx = /\//;
      const hasSlash = regEx.test(formURL);
      if (hasSlash) {
         const normalizeURL = formURL.trim();
         const response = await getSwapiData(e.target.action, normalizeURL);
         console.log('response', response);
         this.showResponse(response, normalizeURL);
      } else {
         alert('Введите "/"');
         this.elLoader.classList.add('d-none');
      }
   }

   showResponse(response, url) {
      if (response?.status === 'success') {
         const getURLInfo = url.split('/');
         console.log(getURLInfo);
         this.elController.classList.remove('d-none');
         this.elController.innerHTML = getURLInfo[1];
         const id = getURLInfo[2];
         this.elId.innerHTML = id;
         if (id) {
            this.elId.classList.remove('d-none');
            this.elId.innerHTML = id;
         } else {
            this.elId.classList.add('d-none');
         }
         this.elPre.innerHTML = JSON.stringify(response.data, null, 2);
      } else {
         this.elController.classList.add('d-none');
         this.elId.classList.add('d-none');
         this.elPre.innerHTML = JSON.stringify(response, null, 2);
      }
      this.elLoader.classList.add('d-none');
   }
}

document.addEventListener('DOMContentLoaded', () => {
   const swapi = new Swapi({
      form: 'js--swapi_form',
      elPre: document.querySelector('.js--swapi_pre'),
      elController: document.querySelector('.js--swapi_controller'),
      elId: document.querySelector('.js--swapi_id'),
      elLoader: document.querySelector('.js--swapi_load')
   });
});