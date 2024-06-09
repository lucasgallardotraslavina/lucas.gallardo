import {ObtenerComponentes, RegistrarComponentes, ActualizarComponentes, EliminarComponentes} from "./promesa.js"
//Identificara los los ID que en este caso solo son botones y le agregara un evento relaciona con una funcio
window.addEventListener("load",()=>{
    document.getElementById("btnIngresar").addEventListener("click", Registrar); 
    document.getElementById("btnActualizar").addEventListener("click", Actualizar);
    CargarDatos();
    document.getElementById("Contraste").addEventListener("click",Contraste)
    document.getElementById("btnFuente").addEventListener("click",fuente)
    document.getElementById("btnIngresar").addEventListener("click", validar); 
})

//================================================================
//========================FUNCION REGISTRAR=======================
//================================================================

// Funcion encargada de registrar los valores en fire base
const Registrar = ()=>{
// Obtiene los valores de los elementos
    let ECodigo = document.getElementById("Codigo");
    let EPlaca = document.getElementById("Placa");
    let EProcesador = document.getElementById("Procesador");
    let EFuente = document.getElementById("Fuente");
    let EGabinete = document.getElementById("Gabinete");

//===================RADIO=================================

    let ERam;
// Verifica qué opción de RAM está seleccionada
    if(document.getElementById("Ram1").checked){
        ERam = 4;
    }else if(document.getElementById("Ram2").checked){
        ERam = 8;
    }else if(document.getElementById("Ram3").checked){
        ERam = 16;
    }else if(document.getElementById("Ram4").checked){
        ERam = 32;
    }

//===================RADIO=================================

    let EGrafica;
// Verifica qué opción de gráfica está seleccionada
    if(document.getElementById("Grafica1").checked){
        EGrafica = "GT";
    }else if(document.getElementById("Grafica2").checked){
        EGrafica = "GTX";
    }else if(document.getElementById("Grafica3").checked){
        EGrafica = "RTX";
    }

//===================CHECK BOX=============================

    let EAlmacenamiento;
// Verifica qué opción de almacenamiento está seleccionada
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
    
// Asigna los valores obtenidos a variables
    let VCodigo = ECodigo.value;
    let VPlaca = EPlaca.value;
    let VProcesador = EProcesador.value;
    let VFuente = EFuente.value;
    let VGabinete = EGabinete.value;
    let VRam = ERam
    let VGrafica = EGrafica
    let VAlmacenamienti = EAlmacenamiento
    let VVentiladores = EVentiladores.value;
// Crea un objeto con los valores obtenidos
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
// Llama a la función RegistrarComponentes de la ppromesa
    RegistrarComponentes(objeto).then (()=>{
// Vuelve a cargar los datos después de registrar
        CargarDatos();
// En caso de que haya algun erro se mostrara el forma de alerta en el navegador 
    }).catch((r)=>{
        alert("algo ocurrio");
        alert(r);
    });

}

//valida los campos que esten vacio al momento de apretar el boton
function validar(){
    validarVacio('Codigo');
    validarVacio('Placa');
    validarVacio('Procesador');
    validarVacio('Fuente');
    validarVacio('Gabinete');
    validarVacio('Ram');
    validarVacio('Grafica');
    validarVacio('Almacenamiento');
    validarVacio('Ventiladores');
}

function validarVacio(idCampo){
    let iNombre = document.getElementById(idCampo);
    console.log(iNombre);
    let nombre = iNombre.value;

    
    if(nombre.trim()==""){
        iNombre.style.borderColor = "red";
        let pNombre = document.getElementById("p"+idCampo);
        pNombre.style.display = "block";
    }
}



//================================================================
//=============TERMINO DE LA FUNCION REGISTRAR====================
//================================================================

//================================================================
//=====================FUNCION CARGAR DATOS=======================
//================================================================


// Funcion encargada de tomar los datos e introducirlos en una tabla ademas de actualizar y eliminar los datos de dicha tabla
function CargarDatos() {
    ObtenerComponentes().then((componentes) => {
        let estructura = "";
        // Crea una tabla con los componentes
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
            estructura += "<td> <button id =" + componentes.id + ">Actualizar</button></td>";
            estructura += "<td> <button id = 'DEL" + componentes.id + "'>Eliminar</button></td>";
            estructura += "</tr>";
        });
        document.getElementById("TablaDatos").innerHTML = estructura;
        componentes.forEach((componentes) => {
            // Asigna eventos a los botones de actualizar y eliminar
            let botonUPD = document.getElementById(componentes.id);

            botonUPD.addEventListener("click", () => {
                let ECodigo = document.getElementById("Codigo");
                let EPlaca = document.getElementById("Placa");
                let EProcesador = document.getElementById("Procesador");
                let EFuente = document.getElementById("Fuente");
                let EGabinete = document.getElementById("Gabinete");

                // Asigna los valores de los componentes seleccionados a los campos del formulario
                ECodigo.value = componentes.Codigo;
                EPlaca.value = componentes.Placa;
                EProcesador.value = componentes.Procesador;
                EFuente.value = componentes.Fuente;
                EGabinete.value = componentes.Gabinete;

                // Actualiza los botones de radio
                document.getElementById("Ram1").checked = componentes.Ram == 4;
                document.getElementById("Ram2").checked = componentes.Ram == 8;
                document.getElementById("Ram3").checked = componentes.Ram == 16;
                document.getElementById("Ram4").checked = componentes.Ram == 32;

                document.getElementById("Grafica1").checked = componentes.Grafica == "GT";
                document.getElementById("Grafica2").checked = componentes.Grafica == "GTX";
                document.getElementById("Grafica3").checked = componentes.Grafica == "RTX";

                // Actualiza las casillas de verificación
                document.getElementById("Almacenamiento1").checked = componentes.Almacenamiento == 250;
                document.getElementById("Almacenamiento2").checked = componentes.Almacenamiento == 500;
                document.getElementById("Almacenamiento3").checked = componentes.Almacenamiento == 1000;
                document.getElementById("Almacenamiento4").checked = componentes.Almacenamiento == 2000;

                let EVentiladores = document.getElementById("Ventiladores");
                EVentiladores.value = componentes.Ventiladores;

                document.getElementById("btnActualizar").value = componentes.id;
            });

            // Asigna eventos al boton eliminar
            let botonDEL = document.getElementById("DEL" + componentes.id);
            botonDEL.addEventListener("click", () => {
                if (confirm("seguro de eliminar:" + componentes.Codigo)) {
                    // Llama a la función eliminarcomponente de la promesa
                    EliminarComponentes(componentes.id).then(() => {
                        // Vuelve a cargar los datos después de eliminar
                        CargarDatos();
                    });
                }
            });
        });
    });
}


//================================================================
//=============TERMINO DE LAFUNCION CARGAR DATOS==================
//================================================================

//================================================================
//=================Funcion ACTUALIZAR=============================
//================================================================
// Funcion encargada de que los datos se rescriban en la tabla
// "muy parecido a la funcion Registrar"

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
    }else if(document.getElementById("Ram2").checked){
        ERam = 8;
    }else if(document.getElementById("Ram3").checked){
        ERam = 16;
    }else if(document.getElementById("Ram4").checked){
        ERam = 32
    }

//===================RADIO=================================

    let EGrafica

    if(document.getElementById("Grafica1").checked){
        EGrafica = "GT";
    }else if(document.getElementById("Grafica2").checked){
        EGrafica = "GTX";
    }else if(document.getElementById("Grafica3").checked){
        EGrafica = "RTX";
    }

//===================check box=============================

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
// Llama a la funcion ActualizarComponente de la promesa
    ActualizarComponentes(objeto, id).then(()=>{
// Carga los datos rescritos en la tabla
        CargarDatos();
    });
}

//================================================================
//=============TERMINO DE LA FUNCION Actualizar ==================
//================================================================

// Alterna el modo oscuro en la página
const Contraste = ()=>{
    document.body.classList.toggle("dark-mode");
}


var fuente = () => {
//En esta función se esta haciendo que al momento de apretar el boton fuente 
//cambie el tamaño de fuente a lo que se haya aplicado la clase en el HTML
    let btn = document.getElementById('btnFuente')
    
    if(btn.value == '0'){
        let elements = document.getElementsByClassName("small-letras")
//Se guarda el largo del elemento en una variable
        const largo = elements.length;
        for (let i = 0; i < largo; i++){
            const element = elements[0]
//Se reemplaza del elemento la clase small-letras por medium-letras
            element.classList.replace('small-letras','medium-letras')
        }
        btn.value = '1';
    }
    
    else if(btn.value == "1"){
        let elements = document.getElementsByClassName("medium-letras");
        const largo = elements.length;
        for (let i = 0; i < largo; i++){
            const element = elements[0]
//Se reemplaza del elemento la clase medium-letras por large-letras
            element.classList.replace('medium-letras','large-letras')
        }
        btn.value = "2";
    }
    
    else if(btn.value == "2"){
        let elements = document.getElementsByClassName("large-letras")
        const largo = elements.length;
        for (let i = 0; i < largo; i++){
            const element = elements[0]
//Se reemplaza del elemento la clase large-letras por small-letras
            element.classList.replace('large-letras','small-letras')
        }
        btn.value = "0"
    }
}