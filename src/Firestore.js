
import firebase from 'firebase';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyBJxXdoMdwr84qSuUWYkZzBvel60vgf300",
    authDomain: "sbamazshot-4263f.firebaseapp.com",
    databaseURL: "https://sbamazshot-4263f.firebaseio.com",
    projectId: "sbamazshot-4263f",
    storageBucket: "sbamazshot-4263f.appspot.com",
    messagingSenderId: "411696244620",
    appId: "1:411696244620:web:676f833bd225c784f9d8a9",
    measurementId: "G-T2ZGJZC8BD"
};
firebase.initializeApp(config);
export default firebase;
