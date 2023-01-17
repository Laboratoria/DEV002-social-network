   // import { EmailLogin } from '../src/components/EmailLogin.js'
    import { signInWithEmailAndPassword, firebaseAuth } from '../src/app/firebase.js'
    import { signInAccount } from '../src/app/signIn.js'

    jest.mock('../src/app/firebase.js', ()=>{
        return{
            firebaseAuth: jest.fn(() =>{
                return {firebaseAuth:'TEST'}
            }),
            signInWithEmailAndPassword: jest.fn((firebaseAuth, email,password) => {
                if(!email || !password){
                    throw new Error('ERROR')
                }
                return Promise.resolve({ user: 'admin' })
            })
        }   
    })

    describe('Test for the login function',()=> {
        const email = "petblr@test.com"
        const password = "Petblrlomejor123"
        
        it('Should call signInWithEmailAndPassword', async()=> {
            await signInAccount(email, password)
            expect(signInWithEmailAndPassword).toHaveBeenCalled()
        })

        it('Should throw an error if executed without arguments', async()=> {
            try {
                await signInAccount()
            }catch(error){             
                expect(error).toEqual(new Error('ERROR'))
            }
        })

        it('Should call signInWithEmailAndPassword with the auth, email and pass arguments', async()=> {
            await signInAccount(email, password)
            expect(signInWithEmailAndPassword).toHaveBeenCalledWith(firebaseAuth, email, password)
        })    
    })
