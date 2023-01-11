import { home } from "./components/home.js"
import { login } from "./components/login.js"
import { register } from "./components/login.js"

const root = document.getElementById("root");

const routes = { 
    '/': home,
    '/login': login,
    '/register': register,
};

export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname,
    );
    root.appendChild(routes[pathname]);
};

const component = routes[window.location.pathname];

