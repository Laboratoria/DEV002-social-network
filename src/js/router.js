/* eslint-disable no-unused-vars */
class Router {
  /**
     * Metodo inicial.
     *
     * @return {void}.
     */
  constructor(paths) {
    // console.log(`entro a constructor con ${paths}`);
    this.paths = paths;
    // console.log(`ahora va con ${this.paths}`);
    this.initRouter();
  }

  /**
     * Permite inicializar el router
     *
     * @return {void}.
     */
  initRouter() {
    const {
      location: {
        pathname = '/',
      },
    } = window;
    const URI = pathname === '/' ? 'home' : pathname.replace('/', '');
    this.load(URI);
  }

  /**
     * Permite iniciar la carga de paginas.
     *
     * @return {void}.
     */
  load(page = 'home') {
    const { paths } = this;
    const { path, template } = paths[page] || paths.error;
    const $CONTAINER = document.querySelector('#content');
    $CONTAINER.innerHTML = template;
    window.history.pushState({}, 'Genial', path);
  }
}
