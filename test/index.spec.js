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
        //const ERROR = [Error=ERROR]
        it('Should call signInWithEmailAndPassword', async()=> {
            await signInAccount(email, password)
            expect(signInWithEmailAndPassword).toHaveBeenCalled()
        })

        it.only('Should throw an error if executed without arguments', async()=>
         {
            try {
                await signInAccount()
            }catch(error){
                console.log(error)                
                expect(error).toMatchObject({Error:'ERROR'})
            }
        })
    
    })
