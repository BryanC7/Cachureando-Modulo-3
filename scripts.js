// Arreglo de productos
let catalogo = [
    {imagen: 'https://picsum.photos/id/21/300/200', nombre: 'Producto 1', codigo: 1, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 100000, cantidad: 1},
    {imagen: 'https://picsum.photos/id/23/300/200', nombre: 'Producto 2', codigo: 2, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 55000, cantidad: 1},
    {imagen: 'https://picsum.photos/id/24/300/200', nombre: 'Producto 3', codigo: 3, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 68000, cantidad: 1},
    {imagen: 'https://picsum.photos/id/30/300/200', nombre: 'Producto 4', codigo: 4, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 52000, cantidad: 1},
    {imagen: 'https://picsum.photos/id/36/300/200', nombre: 'Producto 5', codigo: 5, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 30000, cantidad: 1},
    {imagen: 'https://picsum.photos/id/96/300/200', nombre: 'Producto 6', codigo: 6, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 43000, cantidad: 1},
    {imagen: 'https://picsum.photos/id/104/300/200', nombre: 'Producto 7', codigo: 7, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 10000, cantidad: 1},
    {imagen: 'https://picsum.photos/id/111/300/200', nombre: 'Producto 8', codigo: 8, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 76000, cantidad: 1},
    {imagen: 'https://picsum.photos/id/146/300/200', nombre: 'Producto 9', codigo: 9, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 58000, cantidad: 1},
    {imagen: 'https://picsum.photos/id/250/300/200', nombre: 'Producto 10', codigo: 10, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 25000, cantidad: 1}
]

// Variables y eventos
const cards = document.querySelector('.cards') 
const tabla = document.querySelector('#tabla') 
const contenidoTabla = document.querySelector('#contenido-tabla') 
const vaciarCarrito = document.querySelector('#vaciar-carrito')
const totalNeto = document.querySelector('#totalNeto')
const totalIva = document.querySelector('#totalIva')
const totalCompra = document.querySelector('#totalCompra')
const precioEnvio = document.querySelector('#precioEnvio')
const totalTotal = document.querySelector('#totalTotal')
let carrito = []

window.addEventListener('DOMContentLoaded', mostrarProductos)

/**
 * Muestra en el DOM todos los productos del arreglo
 */
function mostrarProductos() {
    catalogo.forEach(producto => { 
        const card = document.createElement('div')
        card.classList.add('card', 'p-2')
        card.innerHTML = 
        `
        <img class="w-100 mb-2" src="${producto.imagen}">
        <p>${producto.nombre}</p>
        <p>Código: ${producto.codigo}</p>
        <p>Descripción: ${producto.descripcion}.</p>
        <p>Precio: $${producto.precio}</p>
        <button onclick="crearObj(${producto.codigo})" class="boton">Agregar al carrito</button>
        `
        cards.appendChild(card)
    })
}

/**
 * Filtra del arreglo original un producto según su id y crea un objeto de éste, evalúa si ya existe en el arreglo del carrito para así aumentar cantidad y precio. Finalmente retorna al arreglo carrito y se llama a la función encargada de imprimirlo junto a sus valores en el DOM
 * @param {Number} id: Código del producto que se extrae del botón "Agregar al carrito"  
 */
function crearObj(id){
    const producto = catalogo.filter(producto => id === producto.codigo)[0] 
    productoCarrito = {
        imagen: producto.imagen,
        nombre: producto.nombre,
        cantidad: producto.cantidad,
        precio: producto.precio,
        id: producto.codigo
    }
    if(carrito.some(producto => producto.id === productoCarrito.id)) {
        const productos = carrito.map(producto => {
            if(producto.id === productoCarrito.id) {
                producto.cantidad++
                producto.precio = calcularPrecio(producto.cantidad, producto.id)
                return producto
            } else {
                return producto
            }
        })
        carrito = productos
    } else {
        carrito = [...carrito, productoCarrito]
    }
    calcularTotales()
    mostrarCarrito()
}
/**
 * Imprime el carrito de compra en el DOM
 */
function mostrarCarrito(){
    eliminarInfoPrevia()
    carrito.forEach(producto => {
        const productoTabla = document.createElement('tr')
        productoTabla.innerHTML =
        `
        <td>
            <img src=${producto.imagen} width="100px">
        </td>
        <td>${producto.nombre}</td>
        <td>${producto.cantidad}</td>
        <td>$${producto.precio}</td>
        <td>
            <button onclick="eliminarProducto(${producto.id})">X</button>
        </td>
        `
        contenidoTabla.appendChild(productoTabla)
    })
}

/**
 * Mientras exista un elemento en el contenedor padre, se remueve y se imprime el siguiente
 */
function eliminarInfoPrevia() {
    while(contenidoTabla.firstChild) {
        contenidoTabla.removeChild(contenidoTabla.firstChild)
    }
}

/**
 * Elimina todo el contenido del carrito + los valores totales al momento de presionar el botón de vaciar
 */
function borrarCarrito() {
    carrito = []
    totalNeto.textContent = '$0'
    totalIva.textContent = '$0'
    totalCompra.textContent = '$0'
    precioEnvio.textContent = '$0'
    totalTotal.textContent = '$0' 
    
    mostrarCarrito()
}

/**
 * Calcula el precio total dependiendo de la cantidad de un producto en el carrito
 * @param {Number} cantidad: Cantidad de un producto del arreglo carrito
 * @param {Number} id: Identificador para extraer el precio del arreglo original
 * @returns El resultado de la cantidad del producto del carrito por el precio original
 */
function calcularPrecio(cantidad, id) {
    const producto = catalogo.filter(producto => id === producto.codigo)[0]
    return cantidad * producto.precio
}

/**
 * Elimina un producto del carrito
 * @param {Number} id: Código del producto
 */
function eliminarProducto(id) {
    carrito = carrito.filter(producto => id !== producto.id)
    mostrarCarrito()
    if(carrito.length !== 0) {
        calcularTotales()
    } else {
        borrarCarrito()
    }
}

/** 
 * Calcula los precios totales según contenido del carrito (total neto, el IVA incluido, el total + IVA, precio de envio y el total a pagar)
*/
function calcularTotales() {
    const preciosCarrito = carrito.map(producto => producto.precio)
    let totalCarrito = preciosCarrito.reduce((total, actual) => total + actual)

    totalNeto.textContent = '$' + (totalCarrito - (totalCarrito * 0.19))
    totalIva.textContent = '$' + (totalCarrito * 0.19)
    totalCompra.textContent = `$ ${totalCarrito}`
    
    if(totalCarrito < 100000) {
        const montoEnvio = totalCarrito * 0.05
        precioEnvio.textContent = '$' + montoEnvio
        totalTotal.textContent = '$' + (montoEnvio + totalCarrito)
    } else {
        precioEnvio.textContent = '$0'
        totalTotal.textContent = `$ ${totalCarrito}`
    }
}