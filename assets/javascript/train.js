
   var config = {
    apiKey: "AIzaSyB6LzWBgaVFR5tsD9HE-bmgVTUwxaydHjA",
    authDomain: "train-station-6d9bb.firebaseapp.com",
    databaseURL: "https://train-station-6d9bb.firebaseio.com",
    storageBucket: "train-station-6d9bb.appspot.com",
  };

  firebase.initializeApp(config);

// this information below will reference the firebase database.

var trainData = firebase.database();

// below helps me send information to firebase

$("#addMyTrain").on("click", function(){

var trainName = $("#trainNameInput").val().trim();
var destination = $("#destinationInput").val().trim();
var firstTrain = moment($("#firstTrainInput").val().trim(),"HH:mm").subtract(10,"years").format("x");
var frequency = $("#frequencyInput").val().trim();

var newTrain = {

name:trainName,
destination:destination,
firstTrain:firstTrain,
frequency:frequency

}

;


});


