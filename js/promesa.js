import {collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {db} from "./firebase.js"

// Función para registrar componentes en Firebase
export const RegistrarComponentes = async(componentes)=>{
    const docRef = await addDoc(collection(db,"componentes"),componentes)
    return docRef;
}

// Función para obtener los componentes desde Firebase
export const ObtenerComponentes = async()=>{
    const ref = collection(db,"componentes");
    const querySnap = await getDocs(ref);
    let listado = []
    querySnap.forEach(doc => {
        listado.push({...doc.data(),id:doc.id})
    });
    return listado
}

// Función para actualizar componentes en Firebase
export const ActualizarComponentes = async(objeto, id)=>{
    const ref = doc(db,"componentes", id);
    await updateDoc(ref,objeto)
}

// Función para eliminar componentes de Firebase
export const EliminarComponentes = async(id)=>{
    const ref = doc(db,"componentes", id);
    await deleteDoc(ref);
}