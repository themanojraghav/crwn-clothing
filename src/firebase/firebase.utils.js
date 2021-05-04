import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 

const config ={

     
        apiKey: "AIzaSyCxhKRpwpdziE44BWltZZzPgCWloA-j-_I",
        authDomain: "crwn-db-96636.firebaseapp.com",
        projectId: "crwn-db-96636",
        storageBucket: "crwn-db-96636.appspot.com",
        messagingSenderId: "611793719765",
        appId: "1:611793719765:web:5ffa432777f7cfe53eed5c",
        measurementId: "G-B479J5P11F"
       
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;