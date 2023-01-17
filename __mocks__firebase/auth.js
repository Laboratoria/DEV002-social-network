export const  createUserWithEmailAndPassword = jest.fn( (auth, email, password) =>Promise.resolve({
    user:{
        email
    }
}))