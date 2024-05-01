javascript
// Menu of Hamburgers Disponibles
const hamburguesasDisponibles = [
    {
        nombre: "Hamburguesa Clásica",
        descripcion: "Con lechuga y tomate",
        precio: 5000,
        imagen: "./images/Hamburguesa_lechuga_tomate.jpg",
        ingredientes: [{ nombre: "Chedar", precioAdicional: 1500 }, { nombre: "Bacon", precioAdicional: 2000 }]
    },
    {
        nombre: "Hamburguesa con Cheddar",
        descripcion: "Con queso cheddar",
        precio: 4500,
        imagen: "./images/Hamburguesa_chedar.jpg",
        ingredientes: [{ nombre: "Bacon", precioAdicional: 2000 }]
    },
    {
        nombre: "Hamburguesa Doble",
        descripcion: "Con lechuga, tomate y cheddar",
        precio: 8500,
        imagen: "./images/Hamburguesa_doble.jpg",
        ingredientes: [{ nombre: "Bacon", precioAdicional: 2000 },{ nombre: "Huevo", precioAdicional: 1000 }]
    },
    {
        nombre: "Hamburguesa Vegana",
        descripcion: "Con lechuga y tomate",
        precio: 9900,
        imagen: "./images/hamburguesa_vegana.jpg",
        ingredientes: [{ nombre: "Tofu", precioAdicional: 3000 }, { nombre: "Queso Vegano", precioAdicional: 2500 }]
    }
];

const contenedorhamburguesasDisponibles = document.querySelector("#hamburguesasDisponibles");
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoTotal = document.querySelector("#carrito-total");
const carrito = [];

// Funcion para renderizar hamburguesas
const renderBurgers = () => {
    const hamburguesasDisponiblesContainer = document.getElementById("hamburguesasDisponibles");
    hamburguesasDisponibles.forEach((hamburguesa) => {
        const Div = document.createElement("div");
        Div.classList.add("hamburguesasDisponibles");
        Div.innerHTML = `
            <div class="hamburguesa-imagen">
                <img src="${hamburguesa.imagen}" alt="${hamburguesa.nombre}">
            </div>
            <div class="hamburguesa-detalles">
                <h3>${hamburguesa.nombre}</h3>
                <p>${hamburguesa.descripcion}</p>
                <span class="price">$${hamburguesa.precio}</span>
            </div>
            <div class="ingredientes-disponibles">
                ${renderIngredientes(hamburguesa.ingredientes)}
            </div>
            <button class="add-to-cart-button" data-name="${hamburguesa.nombre}" data-price="${hamburguesa.precio}">Agregar al carrito</button>
        `;
        hamburguesasDisponiblesContainer.appendChild(Div);
    });
};

// Función para renderizar ingredientes
const renderIngredientes = (ingredientes) => {
    let html = "";
    ingredientes.forEach((ingrediente) => {
        html += `
            <button class="add-ingredient-button" data-name="${ingrediente.nombre}" data-price="${ingrediente.precioAdicional}">Agregar ${ingrediente.nombre}</button>
        `;
    });
    return html;
};

// Event listener para el boton de agregar ingrediente
const addIngredientButtons = document.querySelectorAll(".add-ingredient-button");
addIngredientButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const hamburguesa = getHamburguesaSeleccionada();
        if (hamburguesa) {
            const ingredienteName = button.getAttribute("data-name");
            const ingredientePrice = parseFloat(button.getAttribute("data-price"));

            hamburguesa.ingredientes.push({ nombre: ingredienteName, precioAdicional: ingredientePrice });
            hamburguesa.precio += ingredientePrice;

            renderHamburguesaSeleccionada(hamburguesa);
        }
    });
});

// Función para obtener la hamburguesa seleccionada
const getHamburguesaSeleccionada = () => {
    // Implementa la lógica para obtener la hamburguesa seleccionada
};

// Función para renderizar la hamburguesa seleccionada
const renderHamburguesaSeleccionada = (hamburguesa) => {
    // Implementa la lógica para renderizar la hamburguesa seleccionada
};

// Call the function to render burgers
renderBurgers();

// Función para guardar el carrito en el Storage
function guardarCarritoEnStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función para cargar el carrito del Storage
function cargarCarritoDelStorage() {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        carrito.push(...JSON.parse(carritoGuardado));
        renderCart();
    }
}

// Llamar a la función para cargar el carrito del Storage
cargarCarritoDelStorage();

// Event listener para el botón de comprar
const comprarButton = document.querySelector(".comprar-button");
comprarButton.addEventListener("click", () => {
    const totalAPagar = document.querySelector("#carrito-total").textContent;
    mostrarMensajeCompra(totalAPagar); // Llama a la función para mostrar el mensaje
});

// Función para mostrar el mensaje de agradecimiento y el monto total a pagar
function mostrarMensajeCompra(montoTotal) {
    const mensaje = `Monto total a pagar: ${montoTotal}. Gracias por su compra.`;
    const mensajeCompraElement = document.querySelector("#mensaje-compra");
    mensajeCompraElement.textContent = mensaje;
}    