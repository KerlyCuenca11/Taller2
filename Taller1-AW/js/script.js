// Array para almacenar los elementos del carrito
let cartItems = [];

// Función para agregar un elemento al carrito
function addToCart(itemName, itemPrice) {
  const item = {
    name: itemName,
    price: itemPrice
  };
  cartItems.push(item);
  updateCart();
}

// Función para actualizar el carrito y el total
function updateCart() {
  const itemsContainer = document.getElementById('items-container');
  const totalContainer = document.getElementById('total');
  let total = 0;

  // Limpiamos el contenedor de elementos del carrito
  itemsContainer.innerHTML = '';

  // Iteramos sobre los elementos del carrito y los agregamos al contenedor
  cartItems.forEach(item => {
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.textContent = `${item.name} - $${item.price}`;
    itemsContainer.appendChild(newItem);

    // Sumamos el precio del elemento al total
    total += parseFloat(item.price);
  });

  // Actualizamos el total
  totalContainer.textContent = total.toFixed(2);
}

// Función para guardar el carrito en el almacenamiento local y redirigir al usuario al carrito de compras
function saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location.href = 'cart.html'; // Redirige al usuario a cart.html
  }
  
