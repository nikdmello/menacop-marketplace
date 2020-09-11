import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBTXI5o_m166QUgcR0Dext1TGjrzcC-MB4",
    authDomain: "menacop-marketplace.firebaseapp.com",
    databaseURL: "https://menacop-marketplace.firebaseio.com",
    projectId: "menacop-marketplace",
    storageBucket: "menacop-marketplace.appspot.com",
    messagingSenderId: "333018088296",
    appId: "1:333018088296:web:4f1545bfaa5c711ff4ccdd",
    measurementId: "G-FFLLJQ9LXD"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInGoogle = () => (
  auth.signInWithPopup(provider).then(function(result) {
  var token = result.credential.accessToken;
  var user = result.user;
}).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  var email = error.email;
  var credential = error.credential;
}));
 
export default firebase;