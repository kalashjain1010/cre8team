import { signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebaseConfig";
// let auth = getAuth();

export const LoginApi =(email, password) => {
   try {
    
       signInWithEmailAndPassword(auth,email,password)
   } catch (err) {
    return err;
   } 
};