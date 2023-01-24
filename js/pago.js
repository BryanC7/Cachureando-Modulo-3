// Variables y eventos
const contenedor = document.querySelector('#contenedor');
const carrito = JSON.parse(localStorage.getItem('carrito'))
const totales = JSON.parse(localStorage.getItem('totales'))
window.addEventListener('DOMContentLoaded', mostrarProductosCarrito)

console.log(carrito)
console.log(totales)

/**
 * Imprime en el DOM los archivos que vienen desde el localstorage con el respectivo total a pagar (considerando costos de IVA y envío)
 */
function mostrarProductosCarrito(){
    carrito.forEach(producto => {
        console.log(producto)
        const cardProducto = document.createElement('div')
        cardProducto.classList.add('contenedor-productos')
        cardProducto.innerHTML =
        `
        <img src="${producto.imagen}" width="200px">
        <p>${producto.nombre}</p>
        <p>${producto.cantidad}</p>
        <p>${producto.precio}</p>
        `
        contenedor.appendChild(cardProducto)
    }) 
}