import 'firebase/compat/storage';

import firebase from 'firebase/compat/app';

// Configure for firebase
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { firebase, storage };
