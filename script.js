// Product data
const products = [
  { id: 1, image: "images/accessory-219346_1280.jpg", title: "cute bracelet", price: 1.99 },
  { id: 2, image: "images/accessory-219350_1280.jpg", title: "pearl bracelet", price: 3.99 },
  { id: 3, image: "images/accessory-219353_1280.jpg", title: "bracelet", price: 2.99 },
  { id: 4, image: "images/earring-1451014_1280.jpg", title: "earrings", price: 2.99 },
  { id: 5, image: "images/jewel-7389356_1280.jpg", title: "nice ring", price: 11.99 },
  { id: 6, image: "images/jewelry-427490_1280.jpg", title: "bracelet sets", price: 5.00 },
  { id: 7, image: "images/silver-791300_1280.jpg", title: "fancy earrings", price: 2.99 },
  { id: 8, image: "images/still-life-aesthetic-earrings.jpg", title: "simple earrings", price: 2.99 },
  { id: 9, image: "images/bracelet-woman-866492_1280.jpg", title: "pearl bracelet", price: 2.99 },
  { id: 10, image: "images/display-shiny-luxurious-golden-chain (1).jpg", title: "necklace", price: 2.99 },
  { id: 11, image: "images/earring-2522608_1280.jpg", title: "earrings", price: 3.60 },
  { id: 12, image: "images/earrings-10332_1280.jpg", title: "cute earrings", price: 2.99 },
  { id: 13, image: "images/images/gold-jewelry-3790542_1280.jpg", title: "gold bracelet", price: 2.00 },
  { id: 14, image: "images/necklace-7077125_1280.jpg", title: "necklace", price: 2.00 },
  { id: 15, image: "images/necklace-7237778_1280.jpg", title: "necklace", price: 2.75 },
  { id: 16, image: "images/necklace-7237782_1280.jpg", title: "necklace", price: 2.55 },
  { id: 17, image: "images/bracelet-3544690_1280.jpg", title: "cultural bracelet", price: 3.99 },
  { id: 18, image: "images/images/ring 3.jpg", title: "promise ring", price: 9.99 },
  { id: 19, image: "images/ripple-ornament-forever-drop-costume.jpg", title: "ripple ornament ring", price: 11.99 },
  { id: 20, image: "images/shiny elegant gold chain.jpg", title: "elegant  chain", price: 3.99 },
  { id: 21, image: "images/shiny-gemstone-necklace-reflects-elegance-glamour-generated-by-ai.jpg", title: "gemstone", price: 2.99 },
  { id: 22, image: "images/pearl-_1280.jp", title: "pearl necklace", price: 3.90 },
  { id: 23, image: "images/productshooting-7237774_1280.jpg", title: "necklace", price: 4.99 },
  { id: 24, image: "images/3a8dc86b-4209-4067-8f14-9dd9bdec6e13.jpg", title: "indian earrings", price: 2.99 },
  { id: 25, image: "images/images/bust-showcase-jewelry-display-necklace-pendant-jewelry-lifestyle-fashion-accessories-mockup (1).jpg", title: "pendant necklace", price: 2.99 },
  { id: 26, image: "images/jewellery-1639077_1280.jpg", title: "earrings", price: 6.99 },
  { id: 27, image: "images/2305.i305.008.P.m005.c33.realistic wedding engagement ring set.jpg", title: "fashion rings", price: 11.99 },
  { id: 28, image: "images/close-up-hand-wearing-jewelry.jpg", title: "fashion rings", price: 2.99 },
  { id: 29, image: "images/pearl-4396157_1280.jpg", title: "pearl bracelet", price: 4.50 },
  { id: 30, image: "images/ring-1603556_1280.jpg", title: "couple rings", price: 4.99 },
  { id: 31, image: "images/jewelry-2524662_1280.jpg", title: "earrings", price: 1.99 },
  
  // Add more products here...
];

// Initialize cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display products
function displayProducts() {
  document.getElementById("root").innerHTML = products.map((item) => {
    const { image, title, price } = item;
    return `
      <div class="product-card">
        <img src="${image}" alt="Product Image">
        <h2 class="card-title">${title}</h2>
        <p class="card-text">Price: $${price.toFixed(2)}</p>
        <button class="btn btn-primary" onclick="addToCart(${item.id}, '${title}', ${price}, 1)">Add to Cart</button>
      </div>
    `;
  }).join("");
}
// Function to add item to cart
function addToCart(id, name, price, quantity) {
  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id, name, price, quantity }); // No image included
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "cart.html";
}
// Function to display cart items
function displayCart() {
  console.log("displayCart called");
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  document.getElementById("count").innerHTML = cart.length;
  document.getElementById("cartItem").innerHTML = "";

  if (cart.length === 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$0.00";
  } else {
    cart.forEach((item, index) => {
      document.getElementById("cartItem").innerHTML += `
        <div class="cart-item">
          <img src="images/accessory-219346_1280.jpg" alt="Product Image">
          <p>${item.name}</p>
          <h2>$${item.price}.00</h2>
          <p>Quantity: ${item.quantity}</p>
          <p>subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
          <button onclick="removeFromCart(${index})">Remove</button>
          <button onclick="decrementQuantity(${index})">-</button>
          <button onclick+"incrementQuantity(${index})">+</button>
        </div>
      `;
    })
      document.getElementById("total").innerHTML = `Total: $${total.toFixed(2)}`;
    }
    console.log("Card displayed");
  }

// Function to remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Function to increment quantity
function incrementQuantity(index) {
  cart[index].quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Function to decrement quantity
function decrementQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    removeFromCart(index);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Initialize product display
displayProducts();

// Initialize cart display
if (window.location.href.includes("cart.html")) {
displayCart();
}
