import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD_AEvzlviZ251MkGuomzQ2Hi3di1fmahY",
    authDomain: "mymoney-1d457.firebaseapp.com",
    projectId: "mymoney-1d457",
    storageBucket: "mymoney-1d457.appspot.com",
    messagingSenderId: "627716859339",
    appId: "1:627716859339:web:5b1ad250d90a74396fc24e"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//int service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
