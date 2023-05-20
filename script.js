const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click" , () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
})) 

 
$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  wrapAround: true,
  freeScroll: true
});

let bool  = localStorage.getItem("login")
// console.log(bool);
if(bool == "true"){
console.log("d");
  let name  = localStorage.getItem("name");
  document.querySelector(".logini").innerHTML = name
}
