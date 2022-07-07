const firebaseConfig = {
    apiKey: "AIzaSyDi3gyyD-EdxiaBPm3WQvX_lm_4wSeCIE4",
    authDomain: "chatbot-b7517.firebaseapp.com",
    databaseURL: "https://chatbot-b7517-default-rtdb.firebaseio.com",
    projectId: "chatbot-b7517",
    storageBucket: "chatbot-b7517.appspot.com",
    messagingSenderId: "295936883292",
    appId: "1:295936883292:web:a2bb9d11123f59a1444499",

};
firebase.initializeApp(firebaseConfig);
function addRoom()

{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML
Room_names = childKey;

console.log(firebase_message_id);
console.log(message_data)
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

function updateLike(message_id)
{
    console.log("clicked on Like butoon -" + message_id);
    button_id = message_id;
    likes = document.getElementById;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes) +1;
    console.log(update_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like : update_likes
    });
}

console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
});};
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}


