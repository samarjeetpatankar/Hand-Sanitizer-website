var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Increment Decrement Qty

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let num = document.querySelector(".num");
let priceDisplay = document.getElementById("productPrice");
let a = 1;
let price = 20.99;
plus.addEventListener("click", () => {
  a++;
  if (a == 1) {
    num.innerHTML = a;
  }
  //   a = a < 10 ? "0" + a : a;
  num.innerHTML = a;
  updatePrice();
});
minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    // a = a < 10 ? "0" + a : a;
    num.textContent = a;
    updatePrice();
  }
});

function updatePrice() {
  priceDisplay.textContent = "₹ " + (price * a).toFixed(2);
}

let itemforcart = {
  id: 1,
  image:
    "https://cdn.shopify.com/s/files/1/0511/9066/1293/products/Pack3_SA_MF.jpg?v=1678874635",
  name: "3 Hand Sanitizers Mystic Foliage",
  price: 1590,
};

let cartItem = JSON.parse(localStorage.getItem("cartitem")) || [];
let cartButton = document.getElementById("addToCart");
cartButton.addEventListener("click", () => {
  cartItem.push(itemforcart);
  localStorage.setItem("cartitem", JSON.stringify(cartItem));
});
