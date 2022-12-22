import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { firebaseAuth } from "./firebase.js"

const registerForm = document.getElementById("registerForm")

// async indica que la función es asincrona, esto también se puede hacer con .then(), pero async/await es más moderno
// las funciones asincronas SIEMPRE dan promesas, que sería lo que va con await o .then()
registerForm.addEventListener("submit", async (e)=>{
    // evita que se actialice la pag una vez se presiona "enter" o REGISTRARSE
    e.preventDefault()
    const email = registerForm['registerFormPetEmailInput'].value
    const psw = registerForm['registerFormPasswordInput'].value
    // try{} catch (error){} es como el .then() y .catch() respectivamente
    // catch (error) solo corre si la función falla
    // await SIEMPRE se usa con async, de lo contrario tira error.
    // await (o .then()) lo que hace es decirle a la función que espere a que se complete lo anterior para poder continuar
    // createUserWithEmailAndPassword espera 3 parametros
        // 1. configuración (firebaseApp)
        // 2. correo (email)
        // 3. contraseña (psw)
    try{
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, psw)
        document.getElementById("authFunciona").classList.remove("hidden")
        console.log(userCredential)
    } catch (error) {
        document.getElementById("authError").classList.remove("hidden")
        console.log(error)
    }
})