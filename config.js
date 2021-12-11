import firebase from 'firebase';

  
  
    const firebaseConfig = {
  apiKey: "AIzaSyA53JUOGCApuilvsKREHRiKyvSvu58XCMY",
  authDomain: "pro-c-58-e6ff3.firebaseapp.com",
  projectId: "pro-c-58-e6ff3",
  storageBucket: "pro-c-58-e6ff3.appspot.com",
  messagingSenderId: "594674380732",
  appId: "1:594674380732:web:6a900a561ccf15d22e45b9"
};


 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();
