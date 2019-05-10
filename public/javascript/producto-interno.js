function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    imgOcultar = document.querySelector(".div-zoom");
    divOcultar = document.querySelector(".division-derecha");
    /* Create lens: */
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /* Insert lens: */
    img.parentElement.insertBefore(lens, img);
    /* Calculate the ratio between result DIV and lens: */
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /* Set background properties for the result DIV */
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /* Execute a function when someone moves the cursor over the image, or the lens: */
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /* And also for touch screens: */
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
        var pos, x, y;
        /* Prevent any other actions that may occur when moving over the image */
        e.preventDefault();
        /* Get the cursor's x and y positions: */
        pos = getCursorPos(e);
        /* Calculate the position of the lens: */
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        /* Prevent the lens from being positioned outside the image: */
        if (x > img.width - lens.offsetWidth) {
            x = img.width - lens.offsetWidth;
           // imgOcultar.style.display = "block"
        }
        if (x < 0) {
            x = 0;
            //imgOcultar.style.display = "block"
        }
        if (y > img.height - lens.offsetHeight) {
            y = img.height - lens.offsetHeight;
          //  imgOcultar.style.display = "block"
        }
        if (y < 0) {
            y = 0;
           // imgOcultar.style.display = "block"
        }
        /* Set the position of the lens: */
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        /* Display what the lens "sees": */
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /* Get the x and y positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x and y coordinates, relative to the image: */
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
}


function paginaCargada(){

    var btn_agregar = document.querySelector(".btn_agregar_producto");

    btn_agregar.addEventListener('click', agregarP);

    function agregarP(){

    let listaDeProdutos = JSON.parse(localStorage.getItem('listaProductos'));

        var name = document.querySelector('.nombre-producto').innerHTML;
        var price = document.querySelector('#precio').innerHTML; 
        var imgUrl = document.querySelector('#myimage').src; 

        var prod = {
            nombre: name,
            precio: price,
            imgUrl: imgUrl
        }

        listaDeProdutos.push(prod);

        localStorage.setItem('listaProductos', JSON.stringify(listaDeProdutos));
    }

    var popUp = document.querySelector(".pop-up");
    var btn_cerrar = document.querySelector(".cerrar_popUp");

    function mostrarPop(){
        popUp.style.display= "flex";
    }

    function ocultarPop(){
        popUp.style.display= "none"
    }

    btn_agregar.addEventListener("click", mostrarPop);
    btn_cerrar.addEventListener("click", ocultarPop);

}

window.addEventListener("load", paginaCargada);