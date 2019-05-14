function windowsLoad(globalEvent) {

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var imagenes = document.querySelectorAll(".mySlides img");

  var slideIndex = 1;
  showSlides(slideIndex);

  var nav = {};
  nav.next = document.querySelector(".next");
  nav.prev = document.querySelector(".prev");
  nav.selector = document.querySelectorAll(".dot");

  function actualizar() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

  }


  nav.next.addEventListener("click", function () {
    slideIndex++;
    if (slideIndex > imagenes.length) {
      slideIndex = 1;
    }
    actualizar();
  });

  nav.prev.addEventListener("click", function () {
    slideIndex--;
    if (slideIndex < 1) {
      slideIndex = 3;
    }
    actualizar();
  });

  nav.selector.forEach(function (selector, index) {
    selector.addEventListener("click", function () {
      slideIndex = index + 1;
      actualizar();
    });
  });


  function showSlides() {

    actualizar();

    if (slideIndex < 3) {
      slideIndex++;
    } else {
      slideIndex = 1;
    }
  }
  setInterval(showSlides, 3000); // cambiar imagen cada 3 segundos
  //-------------------------------------------------------------------
  var newsletter = document.querySelector(".newsletter");
  var boton = document.querySelectorAll("#solicitarInfo");


  function showNewsletter() {
    newsletter.style.display = "block";
  }

  boton.forEach(function (btn) { btn.addEventListener("click", showNewsletter); });

  var botonEnviar = document.querySelector("#enviar-correo");
  var botonCerrar = document.querySelector(".close-icon");

  function quitNewsletter() {
    var correoIngresado = document.querySelector("#correo-ingresado");
    newsletter.style.display = "none";
    correoIngresado.value = " ";
  }

  botonEnviar.addEventListener("click", quitNewsletter);
  botonCerrar.addEventListener("click", quitNewsletter);

  //--------------------RESPONSIVE-----------------------------------------
  
  /*var menu ={};
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
   
  });*/
//---------------------------------------------------


var menu ={};
menu.logo = document.querySelector(".logo img");
menu.nav = document.querySelector(".servicios");
menu.boton = document.querySelector(".hamburguesa__icono");

var seccion = {};
seccion.logoPrin = document.querySelector(".logo");
seccion.logoSecon = document.querySelector(".hamburguesa__logo");
seccion.menuPrin = document.querySelector(".navegacion-bar");
seccion.menuSecon = document.querySelector(".hamburguesa__menu");
resizeCont(globalEvent);
function resizeCont(event) {

  let width = event.currentTarget.innerWidth;
  if(width < 720){
    seccion.logoSecon.appendChild(menu.logo);
    seccion.menuSecon.appendChild(menu.nav);
  }else{
    seccion.logoPrin.appendChild(menu.logo);
    seccion.menuPrin.appendChild(menu.nav);}
}
window.addEventListener("resize", resizeCont);
let varia = document.querySelector(".hamburguesa__menu");
varia.style.height = "0px";
menu.boton.addEventListener("click", function(){

  if(varia.style.height == "350px"){
    varia.style.height = "0px";
  }else{
    varia.style.height = "350px";
  }
 
});
//--------------------------------------------------
}
window.addEventListener("load", windowsLoad);