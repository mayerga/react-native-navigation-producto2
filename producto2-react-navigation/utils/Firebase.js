import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBtT_njdLIlaaUvn40zdsr1KztwETpK-7M",
    authDomain: "popappmovile.firebaseapp.com",
    projectId: "popappmovile",
    storageBucket: "popappmovile.appspot.com",
    messagingSenderId: "1030730414314",
    appId: "1:1030730414314:web:6ccc4e5c086782dbc13f93"
  };

  const app = initializeApp(firebaseConfig);

  export default {
      app
  }