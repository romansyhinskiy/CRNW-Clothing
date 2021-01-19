import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyA3ln_eDHjlb7afUUEhtnEqheyg01hDLDw",
    authDomain: "crwn-db-5faec.firebaseapp.com",
    projectId: "crwn-db-5faec",
    storageBucket: "crwn-db-5faec.appspot.com",
    messagingSenderId: "231065428631",
    appId: "1:231065428631:web:e3c3a66aa20d9291eeffd2",
    measurementId: "G-LP1N0B9W26"
  }

  firebase.initializeApp(config);


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
       console.log(error.message);
      }
    }
    return userRef;
  }


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;