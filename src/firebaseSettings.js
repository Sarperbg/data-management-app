import { initializeApp } from 'firebase/app'
import firebaseConfig from './firebaseConfig'
import { getAuth } from 'firebase/auth'


const app = initializeApp(firebaseConfig)
const auth = getAuth(app);


export default auth