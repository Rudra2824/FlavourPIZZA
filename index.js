function searchFood() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const availableItems = [
      { name: 'pizza', url: 'menu.html' },
    ];
  
    const foundItem = availableItems.find(item => item.name === searchInput);
  
    if (foundItem) {
      window.location.href = foundItem.url;
    } else {
      alert('Item is not available');
    }
  }