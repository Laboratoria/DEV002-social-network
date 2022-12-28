import router from './routes/index.js';
import { app } from './firebase/configuracionFirebase.js';

console.log(app);

/* set time out  */
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
