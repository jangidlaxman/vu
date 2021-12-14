var firebaseConfig = {
    apiKey: "AIzaSyAiknahHTD87fqNV6B_jIcIgNZVLosFyPk",
    authDomain: "kwitter-7da3f.firebaseapp.com",
    projectId: "kwitter-7da3f",
    storageBucket: "kwitter-7da3f.appspot.com",
    messagingSenderId: "580565786268",
    appId: "1:580565786268:web:b50e664c67c77a60309759"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - "+ Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
       window.location="kwitter_page.html";
}
