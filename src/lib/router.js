const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({},"",event.target.href);
};
 const routes = {
    "/":"/pages/index.js",
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