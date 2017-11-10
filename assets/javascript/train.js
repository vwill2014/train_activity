alert (I am connected);

 // Initialize Firebase
    // This is the code we copied and pasted from our app page
    var config = {
      apiKey: "AIzaSyDqK1J2YDYkRHVQWK1j_GIdSKzH0XEcc58",
      authDomain: "vrules-6be1c.firebaseapp.com",
      databaseURL: "https://vrules-6be1c.firebaseio.com",
      storageBucket: "vrules-6be1c.appspot.com"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    // ============ add value to input fields here=====

    // data.base.ref().set({

    // 	// I will be adding value to the input fields

    // })

// ============Create the snapshot function here

	datebase.ref().on("vale", function(snapshot){
		console.log (snapshot.val());
		// $(#name).text(snapshot.val().the variable name goes here);


			// the data will needs to be pushed because
		// varable? = snap.val().whatever set value goes here;
	// })


		// variable Name: $(id).val().trim(),
		// copied for each variable

    // add the following in my code database.ref().set({
    	// .set wants to be given an object - 

   //  	example below: 

   	// clickCount is created in the database by coding it below and setting it to a variable within the code
   // clickCount : clickCounter


// what I want to add value to goes here.

    // });