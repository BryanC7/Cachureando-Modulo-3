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

const cards = document.querySelector('.cards') 
const tabla = document.querySelector('#tabla') 
const contenidoTabla = document.querySelector('#contenido-tabla') 
const vaciarCarrito = document.querySelector('#vaciar-carrito')
let carrito = []
window.addEventListener('DOMContentLoaded', mostrarProductos) 

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
            <button onclick="eliminarProducto(${productoCarrito.id})">X</button>
        </td>
        `
        contenidoTabla.appendChild(productoTabla)
    })
}

function eliminarCarrito() {
    while(contenidoTabla.firstChild) {
        contenidoTabla.removeChild(contenidoTabla.firstChild)
    }
}

function calcularPrecio(cantidad, id) {
    const producto = catalogo.filter(producto => id === producto.codigo)[0]
    return cantidad * producto.precio
}

// function eliminarProducto(id) {
//     const carritoCompra = carrito.filter(producto => id !== producto.codigo)[0]

// }