let checkoutCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    function updateCheckoutCart() {
      const checkoutItemsContainer = document.getElementById('checkoutItems');
      checkoutItemsContainer.innerHTML = '';

      checkoutCartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'mb-2');
        itemElement.innerHTML = `
          <div>${item.name} - $${item.price.toFixed(2)}</div>
          <div>
            <button class="btn btn-sm btn-secondary" onclick="changeQuantity(${index}, -1)">-</button>
            <span class="mx-2">${item.quantity}</span>
            <button class="btn btn-sm btn-secondary" onclick="changeQuantity(${index}, 1)">+</button>
            <button class="btn btn-sm btn-danger ml-2" onclick="removeItem(${index})">Remove</button>
          </div>
        `;
        checkoutItemsContainer.appendChild(itemElement);
      });

      calculateTotal(); // Calculate the total whenever the cart is updated
    }

    function changeQuantity(index, delta) {
      checkoutCartItems[index].quantity += delta;
      if (checkoutCartItems[index].quantity < 1) {
        checkoutCartItems[index].quantity = 1;
      }
      updateCheckoutCart();
      localStorage.setItem('cartItems', JSON.stringify(checkoutCartItems));
    }

    function removeItem(index) {
      checkoutCartItems.splice(index, 1);
      updateCheckoutCart();
      localStorage.setItem('cartItems', JSON.stringify(checkoutCartItems));
    }

    function calculateTotal() {
      const totalAmount = checkoutCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      document.getElementById('totalAmount').innerText = `Total: $${totalAmount.toFixed(2)}`;
    }

    function makePayment() {
      if (checkoutCartItems.length > 0) {
        alert('Order placed successfully!');
        document.getElementById('orderMessage').innerText = 'Order placed successfully!';
        checkoutCartItems = [];
        localStorage.setItem('cartItems', JSON.stringify(checkoutCartItems));
        updateCheckoutCart();
      } else {
        alert('Your cart is empty!');
        document.getElementById('orderMessage').innerText = 'Your cart is empty!';
      }
    }

    document.addEventListener('DOMContentLoaded', updateCheckoutCart);
