import { app } from "./firebase.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth(app);

window.signup = async function(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

try{

await createUserWithEmailAndPassword(
auth,email,password
);

document.getElementById("msg").innerHTML =
"✅ Signup Successful";

}catch(error){

document.getElementById("msg").innerHTML =
error.message;

}

}

window.login = async function(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

try{

await signInWithEmailAndPassword(
auth,email,password
);

document.getElementById("msg").innerHTML =
"✅ Login Successful";

}catch(error){

document.getElementById("msg").innerHTML =
error.message;

}

}

window.logout = async function(){

await signOut(auth);

document.getElementById("msg").innerHTML =
"✅ Logout Successful";

}

onAuthStateChanged(auth,(user)=>{

if(user){

document.getElementById("dashboard").style.display="block";

document.getElementById("userEmail").innerHTML=
user.email;

}else{

document.getElementById("dashboard").style.display="none";

}

});

window.calculateFare=function(){

let km=document.getElementById("km").value;

let fare=20+(km*8);

document.getElementById("fare").innerHTML=
"Estimated Fare ₹"+fare;

}

window.getLocation=function(){

navigator.geolocation.getCurrentPosition(

(position)=>{

document.getElementById("location").innerHTML=

position.coords.latitude+
","+
position.coords.longitude;

}

);

}

window.bookRide=function(){

let pickup=
document.getElementById("pickup").value;

let drop=
document.getElementById("drop").value;

let msg=

`TRIPY Ride Booking

Pickup: ${pickup}

Drop: ${drop}`;

window.open(

"https://wa.me/919236764481?text="+
encodeURIComponent(msg),

"_blank"

);

}

let map=L.map('map')
.setView([25.4484,78.5685],13);

L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{
attribution:'© OpenStreetMap'
}
).addTo(map);
