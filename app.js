let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

const products = [
  { id: 1, name: "Product 1", price: 300, image: "images/Log1.jpg" },
  { id: 2, name: "Product 2", price: 1000, image: "images/Log2.jpg" },
  { id: 3, name: "Product 3", price: 500, image: "images/Log3.jpg" },
];

function addToCart(id, price) {
  const cartList = document.querySelector(".listCard");
  const totalElement = document.querySelector(".total");

  const product = products.find((item) => item.id === id);

  const cartItem = document.createElement("li");
  cartItem.innerHTML = `
    <img src="${product.image}" alt="${product.name}" width="50" height="50" />
    <span>${product.name}</span>
    <span>${price}</span>
    <div>
      <button onclick="changeQuantity(${id}, ${price}, 'decrease')">-</button>
      <div class="count" data-id="${id}">1</div>
      <button onclick="changeQuantity(${id}, ${price}, 'increase')">+</button>
    </div>
  `;

  cartList.appendChild(cartItem);

  updateTotal(id, 1, price);
}

function changeQuantity(id, amount, action) {
  const countElement = document.querySelector(`.count[data-id="${id}"]`);
  let count = parseInt(countElement.textContent);

  if (action === "increase") {
    count++;
  } else if (action === "decrease" && count > 1) {
    count--;
  }

  countElement.textContent = count;
  updateTotal(id, count, amount);
}

function updateTotal(id, count, amount) {
  const totalElement = document.querySelector(".total");
  const total = parseFloat(totalElement.textContent) + count * amount;
  totalElement.textContent = total.toFixed(2);
}
