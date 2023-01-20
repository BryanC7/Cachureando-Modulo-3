// Array con los productos
let productos = [
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

// Imprime el array en la consola
//console.log(productos)

// Definición de variables y eventos
const cards = document.querySelector('.cards') // Contenedor padre
const tabla = document.querySelector('#tabla') // Contenedor padre
window.addEventListener('DOMContentLoaded', mostrarProductos) // Cuando cargue por primera vez el sitio web, mande a llamar la función mostrarProductos


/**
 * Función que muestra los productos en la página
 */
function mostrarProductos() {
    productos.forEach(producto => { // Recorre el arreglo y por cada elemento ejecuta lo que está entre llaves {}
        //console.log(producto) // Muestra en consola elemento por elemento
        const card = document.createElement('div') // Contenedor hijo
        card.classList.add('card', 'p-2')
        card.innerHTML = 
        // `` comillas invertidas conocidas como template strings, utilizado para inyectar variables en el HTML. Se utiliza la sintaxis de ${} y dentro de la llaves la variable
        `
        <img class="w-100 mb-2" src="${producto.imagen}">
        <p>${producto.nombre}</p>
        <p>Código: ${producto.codigo}</p>
        <p>Descripción: ${producto.descripcion}.</p>
        <p>Precio: $${producto.precio}</p>
        <button onclick="obtenerInfo(${producto.codigo})">Agregar al carrito</button>
        `
        // Contenedor padre "adopta" al contenedor hijo indicado entre paréntesis
        cards.appendChild(card)
    })
}
/**
 * Función que al momento de hacer click en un botón rescate la información del producto específico
 * @param {Number} id Código rescatado del botón de la card
 */
function agregarCarrito(id){

    const contenidoTabla = document.createElement('tr')
    contenidoTabla.innerHTML =
    `
    <td><img width=80px src=${productos[id].imagen}></td>
    <td>${productos[id].nombre}</td>
    <td>${productos[id].cantidad}</td>
    <td>${productos[id].precio}</td>
    `
    tabla.appendChild(contenidoTabla)
}

function obtenerInfo(id) {
    console.log(id) 
    const producto = productos.filter(producto => {
        if(id === producto.codigo){
            agregarCarrito(id)
        }}) // Filter recorre un arreglo y devuelve el primer resultado según la condición indicada despúes de la "arrow function" (=>)
    console.log(producto[id]) // Despúes de hacer click en el botón este console.log muestra el elemento ya filtrado del arreglo

  
}

