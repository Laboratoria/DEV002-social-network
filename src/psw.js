// const registerForm = document.getElementById("registerForm")

// const psw = registerForm["registerFormPasswordInput"].value
// const repeatPsw = registerForm["registerFormRepeatPasswordInput"].value

// const pswFun = () =>{
//     psw.addEventListener("keydown", (e)=>{
//         return /[A-Z]/       .test(e) &&
//         /[a-z]/       .test(e) &&
//         /[0-9]/       .test(e) &&
//         /[^A-Za-z0-9]/.test(e) &&
//         psw.length > 6;
//     })
// }

// if(psw){
// psw.addEventListener("keydown", (e)=>{
//         //check empty password field  
//         if(psw == "") {  
//             console.log("Por favor coloque una contraseña");  
//             return false;  
//         }  
//     //minimum password length validation  
//         if(psw.length < 6) {  
//             console.log("La contraseña debe ser de almenos 6 carácteres");  
//             return false;  
//         }  
        
//     //maximum length of password validation  
//         if(psw.length > 15) {  
//             console.log("La contraseña no puede ser de más de 15 carácteres.");  
//             return false;  
//         } else {  
//             alert("Contraseña correcta.");  
//         }  
// })
// }

/*largo de la contraseña*/
// if (psw){
//     psw.addEventListener("keydown", (e)=>{
//         if (e.keyCode === 13){
//             if ( e.length > 6 ) {
//                 if ( e.match(/\d/) ) {
//                     console.log("Contraseña válida")
//                 } else {
//                     console.log("Contraseña inválida")
//                 }
//             } else {
//                 console.log("Contraseña inválida")
//             }
//         }
//     })
// }

// if ( psw.match(/[A-Z]/) ) {
//     console.log("Contraseña válida")
// } else {
//     console.log("Contraseña inválida")
// }

// if (psw != repeatPsw) {
//     console.log("Las contraseñas deben coincidir")
// } else {
//     console.log("Contraseña válida")
// }

// //Validando que haya una letra  
// let regExp = /[A-z]/g; 
// if(regExp.test(numberInput.value)){
//   showError(numberInput,numberErrorDiv, "Wrong format, numbers only" )
//   //actualizando gráficamente la tarjeta substituyendo  con el color rojo de wrong
//   }
//  else{
//   numberInput.value = inputValue.replace(/\s/g,'').replace(/([0-9]{4})/g, '$1 ').trim();    
//   hideError(numberInput, numberErrorDiv);
// }

// cardNumber.addEventListener("keyup", (e) => {

//     let inputValue = e.target.value;
//     //cardForm.inputNumber.value = inputValue
//     cardNumber.value = inputValue
//     //eliminar espacios en blanco
//     .replace(/\s/g, "")
//     //eliminar letras
//     //.replace(/\D/g, "")
//     //espacios cada 4 números
//     .replace(/([0-9]{4})/g, "$1 ")
//     //elimina el último espacio
//     .trim();
    
//     validator.maskify(inputValue);
//     console.log("maskify "+validator.maskify(inputValue));

//     textCardNumber.textContent = validator.maskify(inputValue);

//     if(validator.maskify(inputValue) == "") {
//      textCardNumber.textContent = "0000 0000 0000 0000";
//     }

//  })