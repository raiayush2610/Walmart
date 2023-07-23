import {signOut} from 'firebase/auth'
import { auth } from '../../../firebase';
const logout = async()=>{
          try {
           signOut(auth)
            
          } catch (error) {
           console.log("error:- "+error); 
          }
}
export default logout