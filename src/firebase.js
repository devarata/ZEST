import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBJLguuqm0mt0TdXMpMG8ZXwkjrF_RBJGk",
  authDomain: "slack-clone-53366.firebaseapp.com",
  databaseURL: "https://slack-clone-53366.firebaseio.com",
  projectId: "slack-clone-53366",
  storageBucket: "slack-clone-53366.appspot.com",
  messagingSenderId: "564317421947",
  appId: "1:564317421947:web:6d1926402f4f40682c3dde",
  measurementId: "G-CS0K0H7TYQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider};
export default db;
