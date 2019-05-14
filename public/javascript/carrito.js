
var precioTotal = 0;

var contenedor = document.querySelector('.productos');

var listaProductos = JSON.parse(localStorage.getItem('listaProductos'));

if(listaProductos != null){


for (let index = 0; index < listaProductos.length; index++) {
    const element = listaProductos[index];

    precioTotal += parseInt(element.precio);
    
    var contenido = contenedor.innerHTML;

    contenedor.innerHTML = contenido + `<div class="producto-item">
    <div class="imagen-producto">
      <img src="${element.imgUrl}" alt="">
    </div>
    <div class="info-producto">
      <h4>${element.nombre}</h4>
      <p>NUEVO</p>
      <div class="cantidad-div">
        <p>Cantidad: 1</p>  
    
        
      </div>
      <h4 class="precio-producto">${element.precio}.000</h4>
    </div>
    </div>`;
}
}
document.querySelector(".precioSubtotal").innerHTML = '$' + precioTotal + ".000";

var sumaTotal = precioTotal + 50;
document.querySelector('#precioTotal').innerHTML = '$'+ sumaTotal + ".000";