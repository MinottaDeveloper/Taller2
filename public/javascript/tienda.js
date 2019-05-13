function pantallaCargada() {

    var cantEstrellas = document.querySelector(".num-estrellas");
    var Rating3 = document.querySelector(".ratingbar3");
    var Rating4 = document.querySelector(".ratingbar4");
    var Rating5 = document.querySelector(".ratingbar5");

    var plantilla = document.querySelector(".productoHome");

  

    cantEstrellas = cantEstrellas.innerHTML;


    /* var span = document.createElement("span");
    
    span.setAttribute("class", "fa fa-star checked");
   // document.body.appendChild(p);
    divRating.appendChild(span);
    divRating.appendChild(span);
    divRating.appendChild(span);
    divRating.appendChild(span);
    */

    console.log(cantEstrellas);


    if (cantEstrellas == 3) {
        Rating3.style.display = "block";
    } else if (cantEstrellas == 4) {
        Rating4.style.display = "block";
    } else if (cantEstrellas == 5) {
        Rating5.style.display = "block";
        Rating4.style.display = "none";
    }

    //----------------------------------------------------------


    var cantProductos = document.querySelector("cant_productos_carrito");

   // cantProductos.innerHTML = localStorage.getItem('listaProductos').length;


    //let listaDeProdutos = JSON.parse(localStorage.getItem('listaProductos'));  






    //RESPONSIVE------------------------------------------


    var menu ={};
  menu.logo = document.querySelector(".logo img");
  menu.nav = document.querySelector(".servicios");
  menu.boton = document.querySelector(".hamburguesa__icono");

  var seccion = {};
  seccion.logoPrin = document.querySelector(".logo");
  seccion.logoSecon = document.querySelector(".hamburguesa__logo");
  seccion.menuPrin = document.querySelector(".navegacion-bar");
  seccion.menuSecon = document.querySelector(".hamburguesa__menu");
  resizeCont();
  function resizeCont() {
  
    if($(window).width() < 720){
      seccion.logoSecon.appendChild(menu.logo);
      seccion.menuSecon.appendChild(menu.nav);
    }else{
      seccion.logoPrin.appendChild(menu.logo);
      seccion.menuPrin.appendChild(menu.nav);}
  }
  $(window).resize(resizeCont);

  menu.boton.addEventListener("click", function(){

    $(".hamburguesa__menu").toggle("slow");
   
  });

}

window.addEventListener("load", pantallaCargada);