import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPSiREQw5_M8gMKgGd74kZxALB0eTNVUs",
  authDomain: "rn-delivery-project.firebaseapp.com",
  projectId: "rn-delivery-project",
  storageBucket: "rn-delivery-project.appspot.com",
  messagingSenderId: "794164469204",
  appId: "1:794164469204:web:10209cf4fe49a12fd7ca41",
  measurementId: "G-9E338YNJ0V",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
