/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
import { createUserWithEmailAndPassword, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { firebaseAuth } from './firebase.js';

export const registrar = async (e) => {
  e.preventDefault();
  const registerForm = document.getElementById('registerForm');
  const email = registerForm.registerFormPetEmailInput.value;
  const psw = registerForm.registerFormPasswordInput.value;
  const repeatPsw = registerForm.registerFormRepeatPasswordInput.value;
  try {
    if (psw.length > 6 && psw === repeatPsw) {
      /[A-Z]/.test(psw) && /[a-z]/.test(psw) && /[0-9]/.test(psw);
      await createUserWithEmailAndPassword(firebaseAuth, email, psw);
      await sendEmailVerification(firebaseAuth.currentUser);
      document.getElementById('registerFormRepeatPsw').classList.add('hidden');
      document.getElementById('registerFormRepeatPasswordInput').classList.remove('wrongAlert');
      document.getElementById('authFunciona').classList.remove('hidden')
    } else if (psw !== repeatPsw) {
      document.getElementById('registerFormRepeatPsw').classList.remove('hidden');
      document.getElementById('registerFormRepeatPasswordInput').classList.add('wrongAlert');
    }
  } catch (error) {
    document.getElementById('authError').classList.remove('hidden');
  }
};
