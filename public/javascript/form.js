window.addEventListener('load', function(){
    var form = document.querySelector('form');
    var boton = document.querySelector(".boton");

    function enviarProductos(evento){
        //evento.preventDefault();
        console.log('hola');

        form.submit();

        var input = document.querySelector('.input-productos');
        input.value = localStorage.getItem('listaProductos');

        localStorage.removeItem('productos');
    }

    boton.addEventListener("click", enviarProductos);
    //form.addEventListener('submit', enviarProductos);
});