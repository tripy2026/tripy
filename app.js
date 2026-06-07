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
signup(), login(), logout(),
function calculateFare(){

let km =
document.getElementById("km").value;

let fare =
20 + (km*8);

document.getElementById("fare")
.innerHTML =
"Estimated Fare ₹" + fare;

}

window.calculateFare =
calculateFare;

function getLocation(){

navigator.geolocation
.getCurrentPosition(

(position)=>{

document.getElementById(
"location"
).innerHTML =

position.coords.latitude +
", " +
position.coords.longitude;

});

}

window.getLocation =
getLocation;

let map =
L.map('map')
.setView([25.4484,78.5685],13);

L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

function bookRide(){

let pickup =
document.getElementById(
"pickup"
).value;

let drop =
document.getElementById(
"drop"
).value;

let msg =

`Tripy Ride Booking

Pickup: ${pickup}

Drop: ${drop}`;

window.open(
"https://wa.me/919236764481?text="
+ encodeURIComponent(msg)
);

}

window.bookRide =
bookRide;
