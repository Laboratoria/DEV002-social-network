const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({},"",event.target.href);
};
const routes = {
  "/register":"/pages/register.js",
  "/login":"/pages/login.js",
};

// const handleLocation =async() => {
//     const path = window.location.pathname;
//     const route = routes[path] || routes [404];
//     const html = await fetch(route).then((data) => data.text());
//     document.getElementById("main-page").innerHTML= html;
// };
// window.onpopstate = handleLocation;
window.route = route;


// import { login } from "./pages/login.js";
// import { register } from "./pages/register.js";
// export const router = (hash) => {
//   const rootBox = document.getElementById('root');
//   switch (hash) {
//     case '#/':
//       document.getElementById('root').innerHTML = '';
//       rootBox.appendChild(login());
//       break;
//     case '#/login':
//       document.getElementById('root').innerHTML = '';
//       rootBox.appendChild(login());
//       break;
//     case '#/register':
//       document.getElementById('root').innerHTML = '';
//       rootBox.appendChild(headerLogo());
//       rootBox.appendChild(register());
//       break;
//     default:
//       document.getElementById('root').innerHTML = '';
//       rootBox.appendChild(login());
//       break;
//   }
// };