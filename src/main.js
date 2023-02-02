// eslint-disable-next-line import/no-cycle
import { Login } from './pages/login.js';
// eslint-disable-next-line import/no-cycle, import/no-unresolved
import { Register } from './pages/Register.js';
// eslint-disable-next-line import/no-cycle
import { timeLine } from './pages/timeLine.js';
import { profile } from './pages/profile.js';

const root = document.getElementById('root');
const routes = {
  '/': Login,
  '/login': Login,
  '/register': Register,
  '/timeLine': timeLine,
  '/profile': profile,
};

export const next = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.innerHTML = '';
  root.appendChild(routes[pathname]());
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};
const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};

root.appendChild(component());
