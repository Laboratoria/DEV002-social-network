// eslint-disable-next-line import/no-cycle
import { home } from './components/home.js';
// eslint-disable-next-line import/no-cycle
import { register } from './components/register.js';
// eslint-disable-next-line import/no-cycle
import { login } from './components/login.js';
import { vistaGeneral } from './components/vistaGeneral.js';
// eslint-disable-next-line import/no-cycle
import { form } from './components/form.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
  '/vistaGeneral': vistaGeneral,
  '/form': form,
};
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

rootDiv.appendChild(component());
