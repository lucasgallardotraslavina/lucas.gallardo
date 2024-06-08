import {collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {db} from "./firebase.js"

export const RegistrarComponentes = async(componentes)=>{
    const docRef = await addDoc(collection(db,"componentes"),componentes)
    return docRef;
}

export const ObtenerComponentes = async()=>{
    const ref = collection(db,"componentes");
    const querySnap = await getDocs(ref);
    let listado = []
    querySnap.forEach(doc => {
        listado.push({...doc.data(),id:doc.id})
    });
    return listado
}