try {
    const userCredentials = await signInWithPass(auth, emailLogin, passwordLogin)
    console.log(userCredentials.user)
} catch (error) {
    if (error.code === "auth/user-not-found") {
        alert("usuario NO encontrado");
    } else if (error.code === "auth/wrong-password") {
        alert("Contraseña incorrecta");
    } else if (error.code) {
        console.log(error.code);
    }
}