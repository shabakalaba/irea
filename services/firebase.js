import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDVPuGlyGH1qnCsSqwbeIBeseEfgHmwgiA",
    authDomain: "php2teambs.firebaseapp.com",
    databaseURL: "https://php2teambs.firebaseio.com",
  };


  export const firebaseRef = firebase.initializeApp(config);