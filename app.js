// const admin = require('firebase-admin');
// var serviceAccount = require('karkhana-service.json');
// const functions = require('firebase-functions');

// admin.initializeApp(functions.config().firebase);

// var db = admin.firestore();


var firebaseConfig = {
    apiKey: "AIzaSyDpK0-9RZXzLbKqV08kWLzEn0pJGQ9BkKc",
    authDomain: "karkhana-makerspace.firebaseapp.com",
    databaseURL: "https://karkhana-makerspace.firebaseio.com",
    projectId: "karkhana-makerspace",
    storageBucket: "karkhana-makerspace.appspot.com",
    messagingSenderId: "897330186132",
    appId: "1:897330186132:web:c577e48bfbb6680e"
  };
  
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();

  const docRef = firestore.doc("user/logindata");
  const uname = document.querySelector("uname");
  const pass = document.querySelector("pass");
  const sub = document.querySelector("signin");

  sub.addEventListener("click", function(){
    const emailtosave = uname.nodeValue;
    docRef.set({
        UserName : uname
    }).then(function(){
        console.log("Text saved");
    }).catch(function(error){
        console.log("Error : ", error);
    }); 
  })