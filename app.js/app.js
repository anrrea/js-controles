/*
DOMContentLoaded sirve
para controlar que primero
se cargue todo el documento HTML por ultimo javascrip
*/
// alert:S 0genera o muestra un mensaje emergente
// alert("Holis");
document.addEventListener("DOMContentLoaded", function(){
    //esta es una zona segura
    //console.log(document.getElementById)
});
//anadiendo evento click al boton mostrar
const btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click", function(){
    //alert click("hice click");
    //console.log ("haciendo click");
    const nombres = document.getElementById("txtNombre"). value;
    const apellido = document.getElementById("txtApellido"). value;
    const cedula = document.getElementById("txtCedula"). value;
    const direccion = document.getElementById("txtDireccion"). value;
    console.log('nombres'+nombres+ 'apellido' +apellido+ 'cedula' +cedula+ 'direccion' +direcion);
    alert('nombres'+nombres+ 'apellido' +apellido+ 'cedula' +cedula+ 'direccion' +direcion);
    });
    function hola(nombre, apellido){
        console.log(nombre, apellido);
        //codigo reutilizable
    }