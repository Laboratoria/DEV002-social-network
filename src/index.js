// Importa la biblioteca de Firebase
import { initializeApp } from 'firebase/app';


// Your web app's Firebase configurations
const firebaseConfig = {
  apiKey: 'AIzaSyAAHfvbH9LChUrOwAbR4cydwCsmHa7Q330',
  authDomain: 'usuarias-journey-mates.firebaseapp.com',
  projectId: 'usuarias-journey-mates',
  storageBucket: 'usuarias-journey-mates.appspot.com',
  messagingSenderId: '15257223280',
  appId: '1:15257223280:web:eecc0cb646124a2f42b4b5',
  measurementId: 'G-4W8ETMYH7S',
};

// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Crea una función para registrar usuarios
export function registerUser(email, password) {
  createUserWithEmailAndPassword(email, password)
    .then(() => {
      // El usuario ha sido registrado correctamente
      console.log('Usuario registrado correctamente');
    })
    .catch((error) => {
      // Ocurrió un error al registrar el usuario
      // Puedes obtener más información sobre el error con error.code y error.message
      console.error(error);
    });
}


