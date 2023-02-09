// importamos la funcion que vamos a testear
import { verifiedEmail } from '../src/lib/firebase/registerFir.js';
import { auth, createUserWithEmailAndPassword } from '../src/lib/firebase/metFirebase.js';

jest.mock('../src/lib/firebase/metFirebase.js', () => {
  return { 
    auth: jest.fn(() => ({ auth: 'test' })),

    createUserWithEmailAndPassword: jest.fn ((auth, email, password) => {
      return Promise.resolve({usar: "admin"})
    })
    
  }
})

describe('test para registrarse', () => {
  const email = 'petblr@test.com';
  const password = '093848583';

  it('debería llamar a createUserWithEmailPassword', async () => {
    await verifiedEmail(email, password)
    expect(createUserWithEmailAndPassword).toHaveBeenCalled()
  })

  it('debería llamar a createUserWithEmailPassword con auth, email y pasar los argumentos' , async () => {
    createUserWithEmailAndPassword.mockClear();
    await verifiedEmail(email, password)
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password)
  }) 
})
