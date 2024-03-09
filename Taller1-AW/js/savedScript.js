document.addEventListener('DOMContentLoaded', () => {
    const savedItemsContainer = document.getElementById('saved-items-container');
    const totalContainer = document.getElementById('total');
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    let total = 0;
  
    savedCartItems.forEach(item => {
      const newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.textContent = `${item.name} - $${item.price}`;
      savedItemsContainer.appendChild(newItem);
  
      // Suma el precio del elemento al total
      total += parseFloat(item.price);
    });
  
    // Calcula el total con IVA (por ejemplo, 10%)
    const totalConIVA = total * 1.1; // Agrega un 10% de IVA
  
    // Actualiza el total con IVA en el contenedor
    totalContainer.textContent = totalConIVA.toFixed(2);
  });
  