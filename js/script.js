import { ObtenerComponentes, RegistrarComponentes } from "./promesa.js"

window.addEventListener("load",()=>{
    document.getElementById("btnIngresar").addEventListener("click",Registrar); 
    //document.getElementById("").addEventListener("click",AQUI);//RECORDAR PONER LA FUNCION QUE SE
    CargarDatos();
})


//================================================================
//========================FUNCION REGISTRAR=======================
//================================================================

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
        alert("Eligio el modulo con: "+ERam+"GB DE RAM")
    }else if(document.getElementById("Ram2").checked){
        ERam = 8;
        alert("Eligio el modulo con: "+ERam+"GB DE RAM")
    }else if(document.getElementById("Ram3").checked){
        ERam = 16;
        alert("Eligio el modulo con: "+ERam+"GB DE RAM")
    }else if(document.getElementById("Ram4").checked){
        ERam = 32
        alert("Eligio el modulo con: "+ERam+"GB DE RAM")
    }

//=========================================================
    let EGrafica

    if(document.getElementById("Grafica1").checked){
        EGrafica = "GT";
        alert("Eligio el modelo de Grafica: "+EGrafica)
    }else if(document.getElementById("Grafica2").checked){
        EGrafica = "GTX";
        alert("Eligio el modelo de Grafica: "+EGrafica)
    }else if(document.getElementById("Grafica3").checked){
        EGrafica = "RTX";
        alert("Eligio el modelo de Grafica: "+EGrafica)
    }
//=========================================================
    let EAlmacenamiento

    if(document.getElementById("Almacenamiento1").checked){
        EAlmacenamiento = 250;
        alert("Eligio el Almacenamiento con la capacidad: "+EAlmacenamiento+"GB")
    }else if(document.getElementById("Almacenamiento2").checked){
        EAlmacenamiento = 500;
        alert("Eligio el Almacenamiento con la capacidad: "+EAlmacenamiento+"GB")
    }else if(document.getElementById("Almacenamiento3").checked){
        EAlmacenamiento = 1000;
        alert("Eligio el Almacenamiento con la capacidad:"+EAlmacenamiento+"GB")
    }else if(document.getElementById("Almacenamiento4").checked){
        EAlmacenamiento = 2000;
        alert("Eligio el Almacenamiento con la capacidad: "+EAlmacenamiento+"GB")
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
    
    RegistrarComponentes(objeto).then (()=>{
        alert("Registrado con exito");
    }).catch((r)=>{
        alert("algo ocurrio");
        alert(r);
    });
}
//================================================================
//=============TERMINO DE LA FUNCION REGISTRAR====================
//================================================================

//================================================================
//=====================FUNCION CARGAR DATOS=======================
//================================================================
const CargarDatos = ()=>{
    ObtenerComponentes().then((componentes)=>{
        let estructura = "";
        componentes.forEach(componentes => {
            estructura += "<tr>";
            estructura += "<td>" + componentes.Codigo + "</td>";
            estructura += "<td>" + componentes.Placa + "</td>";
            estructura += "<td>" + componentes.Procesador + "</td>";
            estructura += "<td>" + componentes.Fuente + "</td>";
            estructura += "<td>" + componentes.Gabinete + "</td>";
            estructura += "<td>" + componentes.Ram + "</td>";
            estructura += "<td>" + componentes.Grafica + "</td>";
            estructura += "<td>" + componentes.Almacenamiento + "</td>";
            estructura += "<td>" + componentes.Ventiladores + "</td>";
            estructura += "</tr>";
        });
        document.getElementById("TablaDatos").innerHTML = estructura;
    })      
}
//================================================================
//=============TERMINO DE LAFUNCION CARGAR DATOS==================
//================================================================

//================================================================
//=================Funcion ACTUALIZAR=============================
//================================================================

const Actualizar = ()=>{
    let ECodigo = document.getElementById("Codigo");
    let EPlaca = document.getElementById("Placa");
    let EProcesador = document.getElementById("Procesador");
    let EFuente = document.getElementById("Fuente");
    let EGabinete = document.getElementById("Gabinete");

    //=========================================================
    let ERam

    if(document.getElementById("Ram1").checked){
        ERam = 4;
        alert("Eligio el modulo con: "+ERam+"GB DE RAM")
    }else if(document.getElementById("Ram2").checked){
        ERam = 8;
        alert("Eligio el modulo con: "+ERam+"GB DE RAM")
    }else if(document.getElementById("Ram3").checked){
        ERam = 16;
        alert("Eligio el modulo con: "+ERam+"GB DE RAM")
    }else if(document.getElementById("Ram4").checked){
        ERam = 32
        alert("Eligio el modulo con: "+ERam+"GB DE RAM")
    }

//=========================================================
    let EGrafica

    if(document.getElementById("Grafica1").checked){
        EGrafica = "GT";
        alert("Eligio el modelo de Grafica: "+EGrafica)
    }else if(document.getElementById("Grafica2").checked){
        EGrafica = "GTX";
        alert("Eligio el modelo de Grafica: "+EGrafica)
    }else if(document.getElementById("Grafica3").checked){
        EGrafica = "RTX";
        alert("Eligio el modelo de Grafica: "+EGrafica)
    }
//=========================================================
    let EAlmacenamiento

    if(document.getElementById("Almacenamiento1").checked){
        EAlmacenamiento = 250;
        alert("Eligio el Almacenamiento con la capacidad: "+EAlmacenamiento+"GB")
    }else if(document.getElementById("Almacenamiento2").checked){
        EAlmacenamiento = 500;
        alert("Eligio el Almacenamiento con la capacidad: "+EAlmacenamiento+"GB")
    }else if(document.getElementById("Almacenamiento3").checked){
        EAlmacenamiento = 1000;
        alert("Eligio el Almacenamiento con la capacidad:"+EAlmacenamiento+"GB")
    }else if(document.getElementById("Almacenamiento4").checked){
        EAlmacenamiento = 2000;
        alert("Eligio el Almacenamiento con la capacidad: "+EAlmacenamiento+"GB")
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
    ActualizarComponentes(objeto, id).then(()=>{
        alert("se actualizao")
        CargarDatos();
    });
}