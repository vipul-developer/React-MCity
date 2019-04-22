import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';



  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCk3UmtLqjPN6cYFHa4lVULGP0u49LQNi8",
    authDomain: "m-city-7917c.firebaseapp.com",
    databaseURL: "https://m-city-7917c.firebaseio.com",
    projectId: "m-city-7917c",
    storageBucket: "m-city-7917c.appspot.com",
    messagingSenderId: "112735577055"
  };
  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref("matches");
  const firebasePromotions = firebaseDB.ref("promotions");
  export{
      firebase,
      firebaseMatches,
      firebasePromotions
  }
//   firebaseDB.ref("matches").once("value").then((snapshot) => {
//     console.log(snapshot.val());
//   })