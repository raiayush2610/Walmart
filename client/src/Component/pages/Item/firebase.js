import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
          apiKey: "AIzaSyDHR5_iaScP6Aku56TtUJSXMfbd9yWTizM",
          authDomain: "phoneauthenticationtapop.firebaseapp.com",
          projectId: "phoneauthenticationtapop",
          storageBucket: "phoneauthenticationtapop.appspot.com",
          messagingSenderId: "678175404379",
          appId: "1:678175404379:web:ebcde2846caaff8832aa7e",
          measurementId: "G-FBBKP62151"
};
firebase.initializeApp(firebaseConfig)
// Initialize Firebase
export default firebase
