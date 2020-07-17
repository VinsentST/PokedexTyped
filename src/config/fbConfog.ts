import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyA2NEDfxG53RWGvsS4Q98neRncw4egj0II",
    authDomain: "fir-marreact.firebaseapp.com",
    databaseURL: "https://fir-marreact.firebaseio.com",
    projectId: "fir-marreact",
    storageBucket: "fir-marreact.appspot.com",
    messagingSenderId: "450764190740",
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
    
export default firebase 