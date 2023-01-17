// importamos la funcion que vamos a testear
import { createUser } from "../src/lib/firebase.js"


describe("Se evalua que se registre un usuario", () =>{
  it("debe crear un usuario", () => createUser("pruebaSpec@gmail.com","San123").then((userCredential) =>{ 
        expect(userCredential.user.email).toBe("pruebaSpec@gmail.com")
     })
  )
}) 




