//import { async } from "regenerator-runtime";
import { Home } from "./home.js";
//enrutador,que controlará el comportamiento predeterminado de los enlaces y los cambios de ubicación
export const route = (Event) => {
Event = Event || window.Event;//para esto debemos capturar el evento de click para el enlace 
Event.preventDefault();//que debemos usar para llamar preventDefault esto evitará que la etiqueta 
//"ancla"realice su comportamiento predeterminado de navegar al destino del enlace
console.log("rout")
window.history.pushState({}, "", Event.target.href);//a continuación usaremos la API de "historial"
//del navegador llamando a PushState y pasando el valor "href"de nuestro ancla al tercer argumento
//esto actualizará la URL en el navegador
manejarUbicacion();
};

//definir algunas rutas para este camino para hacer esto crearemos un objeto
//que tenga posible rutas como nuestras claves y ek archivo html para mostrar esas rutas como el valor
//rutas
const routes = {
    404: "/pages/404.html",//además de esto crearemos una clave 404 para las rutas que no estan definidas
    "/": Home,// despues del "/" aqui agrego contenido temple dinamico,lo que mostrará
    "/IniciaSesión": "/pages/IniciaSesión.html",
    "/Creaunacuenta": "/Creaunacuenta.html",
};

const manejarUbicacion = async ()=> { //ahora tenemos que encargarnos de cambiar nuestra ubicación para esto 
//crearemos una nueva función"manejarUbicación"que llamaremos cada vez que tengamos una navegación en nuestra aplicación
const path = window.location.pathname;//para esta función, necesitaremos capturar nuestro nombre de ruta desde la ubicación actual 
const route = routes [path] || routes[404]; //una vez que hayamos definido nuestras rutas usaremos el nombre
//de la ruta para encontrar la ruta deseada o de forma predeterminada,laruta 404 si no existe
const html = await fetch(route).then((data)=>data.text());//a continuación, debemos cargar el html de nuestra ruta, para lograrlo 
//usaremos una llamada de busqueda
document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = manejarUbicacion
window.route = route; //acceso global a nuestra función de ruta 

manejarUbicacion();

