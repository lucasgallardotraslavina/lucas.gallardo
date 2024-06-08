import {ObtenerComponentes, RegistrarComponentes, ActualizarComponentes, EliminarComponentes} from "./promesa.js"

window.addEventListener("load",()=>{
    document.getElementById("btnIngresar").addEventListener("click", Registrar); 
    document.getElementById("btnActualizar").addEventListener("click", Actualizar);
    CargarDatos();
    document.getElementById("Contraste").addEventListener("click",Contraste)
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

//===================RADIO=================================

    let ERam;

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
        ERam = 32;
        alert("Eligio el modulo con: "+ERam+"GB DE RAM")
    }

//===================RADIO=================================

    let EGrafica;

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

//===================CHECK BOX=============================

    let EAlmacenamiento;

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
            estructura += "<td> <button id =" + componentes.id + ">Actualizar</td></button>";
            estructura += "<td> <button id = 'DEL" + componentes.id + "'>Eliminar</td></button>";
            estructura += "</tr>";
        });
        document.getElementById("TablaDatos").innerHTML = estructura;
        componentes.forEach((componentes)=>{

            let botonUPD = document.getElementById(componentes.id);

            botonUPD.addEventListener("click",()=>{
                let ECodigo = document.getElementById("Codigo");
                let EPlaca = document.getElementById("Placa");
                let EProcesador = document.getElementById("Procesador");
                let EFuente = document.getElementById("Fuente");
                let EGabinete = document.getElementById("Gabinete");

                let ERam = document.getElementById("Ram");

                let EGrafica = document.getElementById("Grafica")
                let EAlmacenamiento = document.getElementById("Almacenamiento");

                let Eventiladores = document.getElementById("Ventiladores")


                ECodigo.value = componentes.Codigo;
                EPlaca.value = componentes.Placa;
                EProcesador.value = componentes.Procesador;
                EFuente.value = componentes.Fuente;
                EGabinete.value = componentes.Gabinete;

                ERam = componentes.Ram;
                EGrafica = componentes.Grafica;
                EAlmacenamiento = componentes.Almacenamiento;

                Eventiladores.value = componentes.Ventiladores;

                document.getElementById("btnActualizar").value = componentes.id;
            });
            let botonDEL = document.getElementById("DEL"+componentes.id);
            botonDEL.addEventListener("click",()=>{
                if(confirm("seguro de eliminar:"+componentes.Codigo)){
                    EliminarComponentes(componentes.id).then(()=>{
                        alert("se elimino los componentes con el codigo:"+componentes.Codigo);
                        CargarDatos();
                    })
                }
            })
        })
    });
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


//===================RADIO=================================

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

//===================RADIO=================================

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

//===================check box=============================

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
    let id = document.getElementById("btnActualizar").value;
    
    ActualizarComponentes(objeto, id).then(()=>{
        alert("se actualizao")
        CargarDatos();
    });
}

//================================================================
//=============TERMINO DE LA FUNCION Actualizar ==================
//================================================================

const Contraste = ()=>{
    document.body.classList.toggle("dark-mode");
}