let cartQuantity = 0;
let maxQuantity = 10;

function updateCartQuantity(amount) {
  if (amount >= 0) {
    if (cartQuantity + amount > maxQuantity) {
      alert("The cart is full");
      return;
    } else {
      cartQuantity += amount;
      console.log(`Cart Quantity: ${cartQuantity}`);
    }
  } else {
    if (cartQuantity + amount < 0) {
      alert("Not enough items in the cart");
      return;
    } else {
      if (amount === -cartQuantity) {
        console.log("Cart was reset.");
      }
      cartQuantity += amount;
      console.log(`Cart Quantity: ${cartQuantity}`);
    }
  }
}
