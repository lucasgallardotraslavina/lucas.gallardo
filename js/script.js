import {} from "./promesa.js"

window.addEventListener("load",()=>{
    document.getElementById("").addEventListener("click",AQUI);//RECORDAR PONER LA FUNCION QUE SE 
    document.getElementById("").addEventListener("click",AQUI);//RECORDAR PONER LA FUNCION QUE SE
})



const Registrar = ()=>{
    let ECodigo = document.getElementById("Codigo");
    let EPlaca = document.getElementById("Placa");
    let EProcesador = document.getElementById("Procesador");
    let EFuente = document.getElementById("Fuente");
    let EGabinete = document.getElementById("Gabinete");

//=========================================================
    let ERam

    if(document.getElementById("Ram1").checked){
        ERam = 4;
        alert("Eligio el modulo 4")
    }else if(document.getElementById("Ram2").checked){
        ERam = 8;
        alert("Eligio el modulo 4")
    }else if(document.getElementById("Rma3").checked){
        ERam = 16;
        alert("Eligio el modulo 4")
    }else if(document.getElementById("Ram4").checked){
        ERam = 32
        alert("Eligio el modulo 4")
    }

//=========================================================
    let EGrafica

    if(document.getElementById("Grafica1").checked){
        EGrafica = "GT";
        alert("Eligio la Grafica GT!")
    }else if(document.getElementById("Grafica2").checked){
        EGrafica = "GTX";
        alert("Eligio la Grafica GTX!")
    }else if(document.getElementById("Grafica3").checked){
        EGrafica = "RTX";
        alert("Eligio la Grafica RTX!")
    }
//=========================================================
    let EAlmacenamiento

    if(document.getElementById("Almacenamiento1").checked){
        EAlmacenamiento = 250;
        alert("Eligio el Almacenamiento con la capacidad:"+EAlmacenamiento)
    }else if(document.getElementById("Almacenamiento2").checked){
        EAlmacenamiento = 500;
        alert("Eligio el Almacenamiento con la capacidad:"+EAlmacenamiento)
    }else if(document.getElementById("Almacenamiento3").checked){
        EAlmacenamiento = 1000;
        alert("Eligio el Almacenamiento con la capacidad:"+EAlmacenamiento)
    }else if(document.getElementById("Almacenamiento4").checked){
        EAlmacenamiento = 2000;
        alert("Eligio el Almacenamiento con la capacidad:"+EAlmacenamiento)
    }
//=========================================================

    let EVentiladores = document.getElementById("Ventiladores");



    let VCodigo = ECodigo.value;
    let VPlaca = EPlaca.value;
    let VProcesador = EProcesador.value;
    let VFuente = EFuente.value;
    let VGabinete = EGabinete.value;
    let VRam = ERam
    let VGrafica = EGrafica
    let VAlmacenamienti = EAlmacenamiento
    let VVentiladores = EVentiladores.value;

    const objeto = {
        Codigo:VCodigo,
        Placa:VPlaca,
        Procesador:VProcesador,
        Fuente:VFuente,
        Gabinete:VGabinete,
        Ram:VRam,
        Grafica:VGrafica,
        Almacenamiento:VAlmacenamienti,
        Ventiladores:VVentiladores
    }
    
    

}