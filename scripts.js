productos = [
    {imagen: 'https://picsum.photos/id/21/300/200', nombre: 'producto 1', codigo: '1', descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: '100', cantidad: 1},
    {imagen: 'https://picsum.photos/id/23/300/200', nombre: 'producto 2', codigo: '2', descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: '120', cantidad: 1},
    {imagen: 'https://picsum.photos/id/24/300/200', nombre: 'producto 3', codigo: '3', descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: '130', cantidad: 1},
    {imagen: 'https://picsum.photos/id/30/300/200', nombre: 'producto 4', codigo: '4', descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: '100', cantidad: 1},
    {imagen: 'https://picsum.photos/id/36/300/200', nombre: 'producto 5', codigo: '5', descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: '120', cantidad: 1},
    {imagen: 'https://picsum.photos/id/96/300/200', nombre: 'producto 6', codigo: '6', descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: '130', cantidad: 1},
    {imagen: 'https://picsum.photos/id/104/300/200', nombre: 'producto 7', codigo: '7', descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: '100', cantidad: 1},
    {imagen: 'https://picsum.photos/id/111/300/200', nombre: 'producto 8', codigo: '8', descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: '130', cantidad: 1},
    {imagen: 'https://picsum.photos/id/146/300/200', nombre: 'producto 9', codigo: '9', descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: '100', cantidad: 1},
    {imagen: 'https://picsum.photos/id/250/300/200', nombre: 'producto 10', codigo: '10', descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', precio: '100', cantidad: 1}
];

console.log(productos);

productos.forEach(producto => console.log(producto.codigo));
