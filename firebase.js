import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {

apiKey:"YOUR_API_KEY",

authDomain:"YOUR_DOMAIN",

projectId:"YOUR_PROJECT",

storageBucket:"YOUR_BUCKET",

messagingSenderId:"YOUR_SENDER",

appId:"YOUR_APP_ID"

};

export const app =
initializeApp(firebaseConfig);
