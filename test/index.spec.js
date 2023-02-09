// importamos la funcion que vamos a testear
import { verifiedEmail, popupRegister } from '../src/lib/firebase/registerFir.js';
import {
  auth, provider, createUserWithEmailAndPassword, signInWithPopup,
} from '../src/lib/firebase/metFirebase.js';

jest.mock('../src/lib/firebase/metFirebase.js', () => ({
  auth: jest.fn(() => ({ auth: 'test' })),
  provider: jest.fn(() => ({ provider: 'test' })),

  /* eslint-disable no-shadow */
  /* eslint-disable no-unused-vars */
  createUserWithEmailAndPassword: jest.fn((auth, email, password) => Promise.resolve({ user: 'admin' })),

  signInWithPopup: jest.fn((auth, email, password) => Promise.resolve({ user: 'admin' })),
}));

describe('test para la funcion de login', () => {
  const email = 'example@hotmail.com';
  const password = 'Plomejor123';

  it('llamar a createUserWithEmailAndPassword', async () => {
    await verifiedEmail(email, password);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });

  it('pasar parametros createUserWithEmailAndPassword', async () => {
    createUserWithEmailAndPassword.mockClear();
    await verifiedEmail(email, password);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
  });

  it('error createUserWithEmailAndPassword', async () => {
    const invalidoEmail = 'invalidoEmail';
    await verifiedEmail(invalidoEmail, password);
  });

  it('vacio createUserWithEmailAndPassword', async () => {
    await verifiedEmail();
  });
});

describe('test para probar la funcion de login', () => {
  const email = 'example@hotmail.com';
  const password = 'Plomejor123';

  it('llamar a signInWithPopup', async () => {
    await popupRegister();
    expect(signInWithPopup).toHaveBeenCalled();
  });

  it('pasar parametros signInWithPopup', async () => {
    await popupRegister();
    expect(signInWithPopup).toHaveBeenCalledWith(auth, provider);
  });

  it('error signInWithPopup', async () => {
    await popupRegister();
  });
});
