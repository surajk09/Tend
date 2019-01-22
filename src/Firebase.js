import * as firebase from "firebase";
import firestore from "firebase/firestore";

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyD1T7kyMrQUDUT_HKXyce9tF9dUqKqVJCQ",
  authDomain: "tendmini-8c0ad.firebaseapp.com",
  databaseURL: "https://tendmini-8c0ad.firebaseio.com",
  projectId: "tendmini-8c0ad",
  storageBucket: "tendmini-8c0ad.appspot.com",
  messagingSenderId: "744753191336"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
