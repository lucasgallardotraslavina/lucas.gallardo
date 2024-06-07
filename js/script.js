import {} from "./promesa.js"



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
    }else if(document.getElementById("Ram2").checked){
        ERam = 8;
    }else if(document.getElementById("Rma3").checked){
        ERam = 16;
    }else if(document.getElementById("Ram4").checked){
        ERam = 32
    }

//=========================================================
    let EGrafica

    if(document.getElementById("Grafica1").checked){
        EGrafica = "GT";
    }else if(document.getElementById("Grafica2").checked){
        EGrafica = "GTX";
    }else if(document.getElementById("Grafica3").checked){
        EGrafica = "RTX";
    }
//=========================================================
    let EAlmacenamiento

    if(document.getElementById("Almacenamiento1").checked){
        EAlmacenamiento = 250;
    }else if(document.getElementById("Almacenamiento2").checked){
        EAlmacenamiento = 500;
    }else if(document.getElementById("Almacenamiento3").checked){
        EAlmacenamiento = 1000;
    }else if(document.getElementById("Almacenamiento4").checked){
        EAlmacenamiento = 2000;
    }
//=========================================================

    let EVentiladores = document.getElementById("Ventiladores");



    let VCodigo = ECodigo
    let VPlaca = EPlaca  
    let VProcesador = EProcesador
    let VFuente = EFuente
    let VGabinete = EGabinete
    let VRam = ERam
    let VGrafica = EGrafica
    let VAlmacenamienti = EAlmacenamiento
    let VVentiladores = EVentiladores

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
    document.getElementById("").innerHTML = objeto;

}