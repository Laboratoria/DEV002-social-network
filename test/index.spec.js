// importamos la funcion que vamos a testear

// eslint-disable-next-line import/no-unresolved
import { createUserWithEmailAndPassword } from '../src/firebase/configuracion.js';



describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUserWithEmailAndPassword).toBe('function');
  });
});
