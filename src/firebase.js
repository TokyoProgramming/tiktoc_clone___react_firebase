import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDUnoQ706wlSamwRtcQDGEpoEdAKQXL04U",
  authDomain: "tik-tok-clone-aaedc.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-aaedc.firebaseio.com",
  projectId: "tik-tok-clone-aaedc",
  storageBucket: "tik-tok-clone-aaedc.appspot.com",
  messagingSenderId: "300393598998",
  appId: "1:300393598998:web:51c5d9b8d303b75316e537",
  measurementId: "G-8LVHTPQNXK"
};

const firebaseApp =
    firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();

export default db;
