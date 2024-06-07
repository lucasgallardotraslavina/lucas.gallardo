import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-store.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);