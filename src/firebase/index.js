import firebase from 'firebase/app' 
import '@firebase/firestore' 
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const app = firebase.initializeApp({
    apiKey: "AIzaSyBgRmYbl09ShyNnEgYLu5xxTC61c5Jr-Dk",
    authDomain: "app-coderhousue.firebaseapp.com",
    projectId: "app-coderhousue",
    storageBucket: "app-coderhousue.appspot.com",
    messagingSenderId: "263035645070",
    appId: "1:263035645070:web:acf6b9ead12ba0b16e6ddf",
    measurementId: "G-P7V735G9LT"
  });
  export const getFirebase = () => {
    return app;
}
 
 export const getFirestore =()=>{
    return firebase.firestore(app)    
}
