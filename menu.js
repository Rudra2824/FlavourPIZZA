let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    function addToCart(itemName, itemPrice) {
      const existingItemIndex = cartItems.findIndex(item => item.name === itemName);
      if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity += 1;
      } else {
        cartItems.push({ name: itemName, price: itemPrice, quantity: 1 });
      }
      updateCart();
      openCart();
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  
    function updateCart() {
      const cartItemsContainer = document.getElementById('cartItems');
      cartItemsContainer.innerHTML = '';
  
      cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
          <div class="d-flex justify-content-between">
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        `;
        cartItemsContainer.appendChild(itemElement);
      });
    }
  
    function openCart() {
      document.getElementById('cartDrawer').classList.add('open');
    }
  
    function closeCart() {
      document.getElementById('cartDrawer').classList.remove('open');
    }
  
    function checkout() {
      window.location.href = 'checkout.html';
    }
  
    document.addEventListener('DOMContentLoaded', updateCart);