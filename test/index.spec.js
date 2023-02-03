// // importamos la funcion que vamos a testear
// import { signInWithPass  } from "../src/Firebase/firebase";

// jest.mock("../src/Firebase/firebase");
// jest.mock("../Firebase/firebaseConfig.js");

// describe('Test de Inicio de sesión', () => {
// const email = "veganship@gmail";
// const password = "prueba123456";
//   it('debe retornar error de usuario no encontrado', async () => {
//     try {
//       await signInWithPass(email, password);
//     } catch(error) {
//       expect(error.code).toBe('usuario NO encontrado');
//     }
//   });

//   it("debe retornar un error de contraseña incorrecta"), async () => {
//     try {
//       await signInWithPass(email, password);
//     }catch(error){
//       expect(error.code).toBe('contraseña incorrecta');
//     }
//   }

// });
