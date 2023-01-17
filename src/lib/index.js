// aqui exportaras las funciones que necesites
import { route } from "../../Router/router.js"
const homeElement = document.getElementById("home")
console.log("aqui",homeElement)
homeElement.addEventListener("click",()=>{
console.log("hola")
  route()
}
)