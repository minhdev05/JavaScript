let cartQuantity = 0;
const maxQuantity = 10;
const minQuantity = 0;

displayQuantity();

function updateCartQuantity(amount) {
  if (cartQuantity + amount > maxQuantity) {
    alert("The cart is full");
    return;
  }

  if (cartQuantity + amount < minQuantity) {
    alert("Not enough items in the cart");
    return;
  }

  cartQuantity += amount;
  displayQuantity();
}

function displayQuantity() {
  document.querySelector(
    ".display-quantity"
  ).innerText = `Cart quantity: ${cartQuantity}`;
}
