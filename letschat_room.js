
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBZVQPwjiv0MqlVt8TIerkdYoZINPhNQV4",
      authDomain: "kwitter-58288.firebaseapp.com",
      databaseURL: "https://kwitter-58288-default-rtdb.firebaseio.com",
      projectId: "kwitter-58288",
      storageBucket: "kwitter-58288.appspot.com",
      messagingSenderId: "894329207827",
      appId: "1:894329207827:web:a1da0d41c4d8c07cdf93e6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("welcome_user").innerHTML="welcome: "+user_name+"!" 

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("oldrooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
            Room_names = childKey;
           //Start code
            console.log("Room Name- "+Room_names);
            row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
            document.getElementById("oldrooms").innerHTML += row;
           //End code
           });});}
     getData();
     function addroom(){
           room_name=document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({purpose:"Adding Room Name"});
           localStorage.setItem("room_name",room_name);
           window.location="letachat_page.html";
     }
     function redirectToRoomName(name){
           console.log(name);
           localStorage.setItem("room_name",name);
           window.location="letschat_page.html"
     }
     function logout(){
           localStorage.removeItem("user_name");
           localStorage.removeItem("room_name");
           window.location="index.html";
     
     }
      //End code
     

