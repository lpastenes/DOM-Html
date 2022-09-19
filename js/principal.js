class Producto {
    constructor(id, imgUrl, titulo, precio) {
        this.id = id
        this.imgUrl = imgUrl
        this.titulo = titulo
        this.precio = precio
    }
}

let baseDatos = [];
baseDatos.push(new Producto(1, "../img/airport.jpg", "Aeropuerto - Chicureo", 50000) )
baseDatos.push(new Producto(2, "../img/tour_santiago.jpg", "City Tour Santiago", 40000) )
baseDatos.push(new Producto(3, "../img/lan-chile.jpg", "Chicureo - Aeropuerto", 40000) )
baseDatos.push(new Producto(4, "../img/valpo.jpg", "Tour Valparaiso", 40000) )
baseDatos.push(new Producto(5, "../img/vina-del-mar2.jpg", "Tour Viña del Mar", 40000) )
baseDatos.push(new Producto(6, "../img/hotel.jpg", "Aeropuerto - Hotel", 50000) )
baseDatos.push(new Producto(7, "../img/valle-nevado.jpg", "Aeropuerto - Valle Nevado", 50000) )
baseDatos.push(new Producto(8, "../img/valpo.jpg", "Aeropuerto - Valparaíso", 50000) )
baseDatos.push(new Producto(9, "../img/vina-del-mar.jpg", "Aeropuerto - Viña del Mar", 40000) )
baseDatos.push(new Producto(10, "../img/beach.jpg", "Tour Isla Negra", 40000) )

let carrito = {};

//DOM
const card = document.querySelector('#tarjeta');
const template = document.querySelector('#template-card').content;
const fragmento = document.createDocumentFragment();
const items = document.getElementById('items');

//FUNCION CARD DE PRODUCTOS
function render(baseDatos) {
    card.innerHTML = ""
    baseDatos.forEach((baseDatos) => {
        template.querySelector('img').setAttribute("src", baseDatos.imgUrl);
        template.querySelector('.card-title').textContent = baseDatos.titulo;
        template.querySelector('.card-text').textContent = baseDatos.precio;
        template.querySelector('.btn-warning').dataset.id = baseDatos.id;
        const clone = template.cloneNode(true);
        fragmento.appendChild(clone);
    });
    card.appendChild(fragmento);
};

//VISUALIZAR TODOS LOS PRODUCTOS
render(baseDatos);

//FILTROS ARRAY
const btnFiltro1 = document.querySelector('#option1')
btnFiltro1.addEventListener('click', () => {
    render(baseDatos);
});

const btnFiltro2 = document.querySelector('#option2')
btnFiltro2.addEventListener('click', () => {
    const resultado1 = baseDatos.filter((el) => el.titulo.includes('Aeropuerto'));
    render(resultado1);
});

const btnFiltro3 = document.querySelector('#option3')
btnFiltro3.addEventListener('click', () => {
    const resultado2 = baseDatos.filter((el) => el.titulo.includes('Tour'));
    render(resultado2);
});

//PRESIONAR BTN COMPRAR EN DIV DE LAS CARD
tarjeta.addEventListener('click', e => {
    addCarrito(e);
});


const addCarrito = e => {
    if (e.target.classList.contains('btn-warning')) {
        setCarrito(e.target.parentElement);
    };
};

// CREACION DE LOS ITEM DEL CARRITO
const setCarrito = objeto => {    
    const productoCarro = {
        id: objeto.querySelector('.btn-warning').dataset.id,
        titulo: objeto.querySelector('.card-title').textContent,
        precio: objeto.querySelector('.card-text').textContent,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(productoCarro.id)) { // SI EXISTE EL PRODUCTO EN EL CARRITO SE SUMA 1
        productoCarro.cantidad = carrito[productoCarro.id].cantidad + 1        
    };
    carrito[productoCarro.id] = {...productoCarro};
    renderCarrito();    
};

// VISULAIZAR ELEMENTOS EN EL CARRITO (EN PROCESO)
const renderCarrito = () => {
    console.log(carrito);
}



