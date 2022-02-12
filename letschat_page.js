//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBZVQPwjiv0MqlVt8TIerkdYoZINPhNQV4",
      authDomain: "kwitter-58288.firebaseapp.com",
      databaseURL: "https://kwitter-58288-default-rtdb.firebaseio.com",
      projectId: "kwitter-58288",
      storageBucket: "kwitter-58288.appspot.com",
      messagingSenderId: "894329207827",
      appId: "1:894329207827:web:a1da0d41c4d8c07cdf93e6"
    };
    firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");

    // Initialize Firebase

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value="";
}
