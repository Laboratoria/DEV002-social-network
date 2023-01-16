import { Login } from "./pages/Login.js";
import { Register } from  "./pages/Register.js";
import { timeLine } from  "./pages/timeLine.js";
// import { registerButton } from "./firebase/registro.js";

const root = document.getElementById('root')
const routes = {
'/': Login,
'/login': Login,
'/register': Register,
'/timeLine': timeLine,
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

