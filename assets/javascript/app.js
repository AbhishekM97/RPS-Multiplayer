var firebaseConfig = {
    apiKey: "AIzaSyC5p-_b8l7QlFSUJbXprn1b8u_nNDZzuiU",
    authDomain: "rock-paper-scissors-game-97e8a.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-game-97e8a.firebaseio.com",
    projectId: "rock-paper-scissors-game-97e8a",
    storageBucket: "",
    messagingSenderId: "613897776428",
    appId: "1:613897776428:web:6f3b42b69ceedab9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var pOneChoice;
var pTwoChoice;



$(document).ready(function(){
    $("img").on('click',function(){
    console.log(this);
    pOneChoice= $(this).attr("id");
    console.log(pOneChoice);
    
    });
});
