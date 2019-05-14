function paginaCargada(){

    var nombre = document.querySelector(".nombre-in");
    var apellidos = document.querySelector(".apellidos-in");
    var telefono = document.querySelector(".telefono-in");
    var cedula = document.querySelector(".cedula-in");
    var direccion = document.querySelector(".direccion-in");
    var barrio = document.querySelector(".barrio-in");
    var departamento = document.querySelector(".departamento-in");
    var ciudad = document.querySelector(".ciudad-in");

    var select_tipoTarjeta = document.querySelector(".tipoTarjeta-in");
    var numeroTarjeta = document.querySelector(".numeroTarjeta-in");
    var select_banco = document.querySelector(".banco-in");
    var nombreTitular = document.querySelector(".nombreTitular-in");
    var select_tipoDocumento = document.querySelector(".tipoDocumento-in");
    var numeroDocumento  = document.querySelector(".numeroDocumento-in");

    /*
    function cambiar(){
        var select = document.getElementById("Cambio"), //El <select>
            value = select.value, //El valor seleccionado
            text = select.options[select.selectedIndex].innerText; //El texto de la opción seleccionada
    }*/


}

window.addEventListener("load", paginaCargada);