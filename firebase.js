import { app } from "./firebase.js";
import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {

apiKey: "AIzaSyCM_wNzASy9qwcWGUfRo_inQzJtSG5TadA",

authDomain: "tripy-4d596.firebaseapp.com",

projectId: "tripy-4d596",

storageBucket: "tripy-4d596.firebasestorage.app",

messagingSenderId: "38146514812",

appId: "1:38146514812:web:90582eed0bea0f69e50ef9",

measurementId: "G-7L4YKH4TCZ"

};

const app = initializeApp(firebaseConfig);

export { app };
