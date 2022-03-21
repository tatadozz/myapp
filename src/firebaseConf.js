import firebase from "firebase/compat/app"
import "firebase/compat/storage"
import "firebase/compat/firestore"


export const app = firebase.initializeApp({
    "projectId": "projet-iutlpdim-lefief",
    "appId": "1:951546668659:web:2ad5cb285cdf326907ac06",
    "storageBucket": "projet-iutlpdim-lefief.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyA14qsvK53FuIbZ4wMFP_VZP2WA977eHso",
    "authDomain": "projet-iutlpdim-lefief.firebaseapp.com",
    "messagingSenderId": "951546668659",
    "measurementId": "G-TX1G506K6P"
  });

  //mettre dans le composant qui utilise le storage
var storage = firebase.storage();

export default storage;

//export app