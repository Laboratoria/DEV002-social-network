/* eslint-disable max-len */
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
  signInWithEmailAndPassword,
  signOutFirebase,
  signInWithPopup,
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
    signInWithPopup: jest.fn((auth, provider) => {
      if (!auth || !provider) return Promise.reject('no auth or provider');
      return Promise.resolve({ user: 'user', credential: 'credential' });
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
    } catch (error) {
      expect(error).toEqual(new Error('ERROR'));
    }
  });

  it('Should call signInWithEmailAndPassword with auth, email and password arguments', async () => {
    await signInWithEmailAndPassword(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
  });

  describe('Test for the registerUser function', () => {
    const email = 'journeymates@test.com';
    const password = 'journeymates123';
    const Name = 'Journey Mates Team';
    const country = 'México';

    it('Should call createUserWithEmailAndPassword', async () => {
      await createUserWithEmailAndPassword(auth, email, password);
      expect(createUserWithEmailAndPassword).toHaveBeenCalled();
    });

    it('createUserWithEmailAndPassword should throw an error if the email is invalid or if it doesnt exist', async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        expect(error.message).toBe('Este correo no existe o es inválido');
      }
    });

    it('Should call createUserWithEmailAndPassword with auth, email and password arguments', async () => {
      await createUserWithEmailAndPassword(email, password);
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
    });

    it('Should throw an error if the password is weak', async () => {
      try {
        await createUserWithEmailAndPassword(email, 'weak', 'Name', 'country', jest.fn());
      } catch (error) {
        expect(error.message).toBe('Tu contraseña debe contener al menos 6 caracteres');
      }
    });
  });

  describe('Test for the signOut functions. The user should be able to sign out', () => {
    it('signOut should be a function', () => {
      expect(typeof signOutFirebase).toBe('function');
    });

    it('should call signOut', async () => {
      await signOutFirebase(auth);
      expect(signOutFirebase).toHaveBeenCalled();
    });

    it('Should call signOut', async () => {
      await signOutFirebase(auth);
      expect(signOutFirebase).toHaveBeenCalledWith(auth);
    });

    it('Should throw an error if signOutFirebase function doesnt have a parameter', async () => {
      try {
        const result = await signOutFirebase();
        expect(result).toBe(false);
      } catch (error) {
        expect(error).toBe('no auth parameter');
      }
    });
  });
});

describe('Test for the signInWithPopup function', () => {
  const auth = 'TEST';
  const provider = 'google';

  it('Should call signInWithPopup', async () => {
    await signInWithPopup(auth, provider);
    expect(signInWithPopup).toHaveBeenCalled();
  });

  it('Should throw an error if executed without auth or provider', async () => {
    try {
      await signInWithPopup();
    } catch (error) {
      expect(error).toEqual('no auth or provider');
    }
  });

  it('Should call signInWithPopup with auth and provider arguments', async () => {
    await signInWithPopup(auth, provider);
    expect(signInWithPopup).toHaveBeenCalledWith(auth, provider);
  });

  it('Should return the resolved value from signInWithPopup', async () => {
    const result = await signInWithPopup(auth, provider);
    expect(result).toEqual({ user: 'user', credential: 'credential' });
  });
});
