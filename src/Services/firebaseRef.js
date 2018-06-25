import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyALzXI6YeeJSjXNoz6DEfdKA8mNRA2m3zc",
    authDomain: "teambs-258e2.firebaseapp.com",
    databaseURL: "https://teambs-258e2.firebaseio.com"
  };


  export const firebaseRef = firebase.initializeApp(config);