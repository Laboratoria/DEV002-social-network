/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-expressions */
// importamos la funcion que vamos a testear
// eslint-disable-next-line import/no-unresolved
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth';
import { inicioDeSesionEmail } from '../src/pages/inicioDeSesionCorreo';
import { createUserWithEmailAndPassword } from '../src/firebase/configuracion.js';
import { auth } from '../firebase/configuracion.js';

// primer mock de autenticacion
jest.mock('../src/firebase/configuracion.js', () => ({ // aqui se accede a la libreria "JEST"
  auth: jest.fn(() => ({ auth: 'auth' })), // Aqui imitamos el objeto auth

  // segundo Mock "signInWithEmailAndPassword"
  signInWithEmailAndPassword: jest.fn((email, password) => {
    if (email === 'correonoexistente@gmail.com') {
      throw new Error('Correo inválido');
    } if (password === '123') {
      throw new Error('Contraseña inválida'); // lanzamos el error
    }
  }),
  // tercer Mock "createUserWithEmailAndPassword"
  createUserWithEmailAndPassword: jest.fn((email, password) => {
    if (email === 'correonoexistente@gmail.com') {
      throw new Error('Correo inválido');
    } if (password === '123') {
      throw new Error('Contraseña inválida'); // lanzamos el error
    }
  }),
}));
