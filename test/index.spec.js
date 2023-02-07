// importamos la funcion que vamos a testear
import { createUserWithEmailAndPassword, verifiedEmail }
  from '../src/lib/firebase/registerFir.js';

  jest.mock('../src/lib/firebase/registerFir.js', () => ({
    createUserWithEmailAndPassword: jest.fn((email, password) => {
      if (!email || !password) {
        throw new Error('ERROR');
      }
      return Promise.resolve({ userCredential: 'admin' });
    }),
  }));

describe('test para la funcion de login', () => {
  const email = 'petblr@test.com';
  const password = 'Petblrlomejor123';

  it('Should call signInWithEmailAndPassword', async () => {
    await verifiedEmail(email, password);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
});
