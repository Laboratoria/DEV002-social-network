/* eslint-disable no-trailing-spaces */
/* eslint-disable space-before-blocks */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-expressions */
// importamos la funcion que vamos a testear
// eslint-disable-next-line import/no-unresolved
import {
  createUserWithEmailAndPassword,
  auth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  inicioDeSesionEmail,
  tapLike,
  registerUser,
  saveTask,
  saveUser,
  signOutFirebase,
} from '../src/firebase/configuracion.js';

jest.mock('../src/firebase/configuracion.js', () => {
  return {
    auth: jest.fn(() => {
      return { auth: 'TEST' };
    }),
    signInWithEmailAndPassword: jest.fn((email, password) => {
      if (!email || !password) {
        throw new Error('ERROR');
      }
      return Promise.resolve({ user: 'admin' });
    }),
    signOutFirebase: jest.fn((auth) => {
      // eslint-disable-next-line prefer-promise-reject-errors
      if (!auth) return Promise.reject('no auth parameter');
    }),
    createUserWithEmailAndPassword: jest.fn((email, password) => {
      if (!email || !password) {
        throw new Error('ERROR');
      }
      return Promise.resolve({ userCredential: 'admin' });
    }),
    sendEmailVerification: jest.fn((auth) => {
      if (!auth) return Promise.reject();
    }),
    updateProfile: jest.fn((displayName, auth) => {
      if (!auth || !displayName) return Promise.reject('no displayName or auth');
    }),
  };
});

describe('Test for the inicioDeSesionEmail function', () => {
  const email = 'journeymates@test.com';
  const password = 'journeymates123';

  it('Should call signInWithEmailAndPassword', async () => {
    await signInWithEmailAndPassword(auth, email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });

  it('Should throw an error if executed without arguments', async () => {
    try {
      await signInWithEmailAndPassword();
    } catch (error){             
      expect(error).toEqual(new Error('ERROR'));
    }
  });

  it('Should call signInWithEmailAndPassword with the firebaseAuth, email and pass arguments', async () => {
    await signInWithEmailAndPassword(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
  });

  it('should call signOut firebase function', async () => {
    await signOutFirebase(auth);
    expect(signOutFirebase).toHaveBeenCalled();
  });

  it('should throw an error signOut firebase function', async () => {
    try {
      const result = await signOutFirebase();
      expect(result).toBe(false);
    } catch (error) {
      expect(error).toBe('no auth parameter');
    }
  });
});
