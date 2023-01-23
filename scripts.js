// Arreglo de productos
let catalogo = [
    {imagen: 'https://picsum.photos/id/21/300/200', nombre: 'Producto 1', codigo: 1, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 10, cantidad: 1},
    {imagen: 'https://picsum.photos/id/23/300/200', nombre: 'Producto 2', codigo: 2, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 20, cantidad: 1},
    {imagen: 'https://picsum.photos/id/24/300/200', nombre: 'Producto 3', codigo: 3, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 30, cantidad: 1},
    {imagen: 'https://picsum.photos/id/30/300/200', nombre: 'Producto 4', codigo: 4, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 40, cantidad: 1},
    {imagen: 'https://picsum.photos/id/36/300/200', nombre: 'Producto 5', codigo: 5, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 50, cantidad: 1},
    {imagen: 'https://picsum.photos/id/96/300/200', nombre: 'Producto 6', codigo: 6, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 60, cantidad: 1},
    {imagen: 'https://picsum.photos/id/104/300/200', nombre: 'Producto 7', codigo: 7, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 70, cantidad: 1},
    {imagen: 'https://picsum.photos/id/111/300/200', nombre: 'Producto 8', codigo: 8, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 80, cantidad: 1},
    {imagen: 'https://picsum.photos/id/146/300/200', nombre: 'Producto 9', codigo: 9, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 90, cantidad: 1},
    {imagen: 'https://picsum.photos/id/250/300/200', nombre: 'Producto 10', codigo: 10, descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: 100, cantidad: 1}
]

// Variables y eventos
const cards = document.querySelector('.cards') 
const tabla = document.querySelector('#tabla') 
const contenidoTabla = document.querySelector('#contenido-tabla') 
const vaciarCarrito = document.querySelector('#vaciar-carrito')
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
        <button onclick="crearObj(${producto.codigo})">Agregar al carrito</button>
        `
        cards.appendChild(card)
    })
}

/**
 * Filtra del arreglo original un producto según su id y crea un objeto de éste, evalúa si ya existe en el arreglo del carrito para así aumentar cantidad y precio. Finalmente retorna al arreglo carrito y se llama a la función encargada de imprimirlo en el DOM
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
        carrito = [...productos]
    } else {
        carrito = [...carrito, productoCarrito]
    }
    mostrarCarrito()
}
/**
 * Imprime el carrito de compra en el DOM
 */
function mostrarCarrito(){
    eliminarCarrito()
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
function eliminarCarrito() {
    while(contenidoTabla.firstChild) {
        contenidoTabla.removeChild(contenidoTabla.firstChild)
    }
}

/**
 * Elimina todo el contenido del carrito al momento de presionar el botón de vaciar
 */
function borrarCarrito() {
    carrito = []
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
}