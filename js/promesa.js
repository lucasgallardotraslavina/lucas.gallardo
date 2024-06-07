import {collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {db} from "./firebase.js"

export const RegistrarComponentes = async(componentes)=>{
    const docRef = await addDoc(collection(db,"componentes"),componentes)
    return docRef;
}