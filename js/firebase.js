import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-store.js";
import { firebaseConfig } from "./crendencial.js";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);