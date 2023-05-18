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
let a = 1;
plus.addEventListener("click", () => {
  a++;
  if (a == 1) {
    num.innerHTML = "01";
  }
//   a = a < 10 ? "0" + a : a;
  num.innerHTML = a;
});
minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    // a = a < 10 ? "0" + a : a;
    num.textContent = a;
  }
});
