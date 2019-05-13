function pantallaCargada(globalEvent) {

    var cantEstrellas = document.querySelectorAll(".num-estrellas");
    var Rating3 = document.querySelectorAll(".ratingbar3");
    var Rating4 = document.querySelectorAll(".ratingbar4");
    var Rating5 = document.querySelectorAll(".ratingbar5");


   // console.log(cantEstrellas);
   cantEstrellas.forEach((e)=>{
     console.log(e)
   })

    Rating3.forEach((element, index) => {
      if (cantEstrellas[index].innerHTML == "3") {
        element.style.display = "block";
    }});

    Rating4.forEach((element, index) => {
      if (cantEstrellas[index].innerHTML == "4") {
        element.style.display = "block";
    }});

    Rating5.forEach((element, index) => {
      if (cantEstrellas[index].innerHTML == "5") {
        element.style.display = "block";
    }});


    //----------------------------------------------------------


    var cantProductos = document.querySelector("cant_productos_carrito");

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

}

window.addEventListener("load", pantallaCargada);