// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA7v6DfK-F5Pi5ZYU4fBiRKuEM-WrFPYys",
    authDomain: "react-netflix-vb.firebaseapp.com",
    databaseURL: "https://react-netflix-vb.firebaseio.com",
    projectId: "react-netflix-vb",
    storageBucket: "react-netflix-vb.appspot.com",
    messagingSenderId: "572533030470",
    appId: "1:572533030470:web:88dcd096372f37f65f1447",
    measurementId: "G-ZVE53FCSNH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{auth}
  export default db;