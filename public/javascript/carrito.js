
var precioTotal = 0;

var contenedor = document.querySelector('.productos');

var listaProductos = JSON.parse(localStorage.getItem('listaProductos'));

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
        <p>Cantidad:</p>  
    
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
           
          </select>
      </div>
      <h4 class="precio-producto">${element.precio}.000</h4>
    </div>
    </div>`;
}

document.querySelector('#precioTotal').innerHTML = '$'+ precioTotal + ".000";