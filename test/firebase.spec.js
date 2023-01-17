// importamos la funcion que vamos a testear
import { createUser } from "../src/lib/firebase.js"


describe("Se evalua inicio de sesion", () =>{
  it("test de creacion de usuario", () => createUser("pruebaSpec@gmail.com","San123").then((userCredential) =>{ 
        expect(userCredential.user.email).toBe("pruebaSpec@gmail.com")
     })
  )
}) 




