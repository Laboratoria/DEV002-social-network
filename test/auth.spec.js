// importamos la funcion que vamos a testear
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  auth,
  signInGoogle,
  logOut,
  currentUserInfo,
  signIn,
  createUser,
} from '../src/lib/index.js';

jest.mock('../src/lib/index.js', () => ({
  auth: jest.fn(() => ({ auth: 'test' })),
  createUserWithEmailAndPassword: jest.fn ((auth, userMail, UserPass) => {
    if(!userMail || !UserPass){
      throw new Error('Error');
    }
    Promise.resolve({
      email: 'sus'
    });
  }),

  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  getAuth: jest.fn(),
  signInWithPopup: jest.fn(),
  currentUserInfo: jest.fn(),

}));

describe('Test para createUser', () => {
  const userName = 'Laura';
  const userMail = 'petsbook@gmail.com';
  const userPass = '1234567';
  it('Deberia llamar a createUserWithEmailAndPassword', () => {
    createUser(userMail, userPass, userName);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
  it('Debería llamar a createUserWithEmailAndPassword con sus parametros', () => {
    createUser(userMail, userPass, userName);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, userMail, userPass)
});
it('signup debería ser una funcion', () => {
    expect(typeof createUser).toBe('function')
});
it('Debería recibir el email', () => {
    createUser(userMail, userPass, userName);
    expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('readingbook@gmail.com')
});
it('Debería recibir el password', () => {
    createUser(userMail, userPass, userName);
    expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('1234567')
});
it('Debería recibir el nombre', () => {
  createUser(userMail, userPass, userName);
  expect(createUserWithEmailAndPassword.mock.calls[0][3]).toBe('Laura')
})
});





