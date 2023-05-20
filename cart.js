document.querySelector(".checkout-button").addEventListener("click", () => {
  document.getElementById("first").classList.add("first-none");
  document.querySelector(".second").classList.remove("second1");
  document.getElementById("shiping-input").classList.add("shipping-none");
  document.getElementById("payment-method").classList.add("payment-none");
  document.querySelector(".last-page").classList.add("last-page-none");
  document.getElementById("inputs").style.display = "block";
});

document.getElementById("next").addEventListener("click",()=>{

})


document.getElementById("next").addEventListener("click", () => {

  let name  = document.getElementById("username").value
  let last  = document.getElementById("userlast").value
  let num  = document.getElementById("phonenum").value
let country = document.getElementById("country").value
let city  = document.getElementById("city").value
let address = document.getElementById("address").value
let apt = document.getElementById("apt").value
let postal = document.getElementById("postal").value
 
 
let cardnum  = document.getElementById("cardnum").value
let month = document.getElementById("month").value
let year = document.getElementById("year").value
let cvv = document.getElementById("cvv").value


  


if(name.length == 0 || last.length ==0 || num.length != 10){
  alert("please enter the valid information")
  return false;
}
  else if (
    document
      .getElementById("shiping-input")
      .classList.contains("shipping-none") &&
    document.getElementById("payment-method").classList.contains("payment-none")
  ) {
    document.getElementById("inputs").style.display = "none";
    document.getElementById("contacts").style.color = "black";
    document.getElementById("shipping").style.color = "orangered";
    document.getElementById("shiping-input").classList.remove("shipping-none");

   
  } else if (
    !document
      .getElementById("shiping-input")
      .classList.contains("shipping-none")
  ) {
    if(country.length == 0 || city.length ==0 || address.length == 0||apt.length ==0 || postal.length !=6){
      alert("please enter the valid information")
      return false;
    }
    document.getElementById("first").classList.add("first-none");
    document.getElementById("shiping-input").classList.add("shipping-none");
    document.getElementById("shipping").style.color = "black";
    document.getElementById("payment").style.color = "orangered";
    document.getElementById("payment-method").classList.remove("payment-none");
    
  } else {
    if(cardnum.length != 16 || month.length !=2 ||  year.length !== 4||cvv.length !==3 ){
      alert("please enter the valid information")
      return false;
    }

    document.querySelector(".second").classList.add("second1");
    document.getElementById("first").classList.add("first-none");
    document.getElementById("shiping-input").classList.add("shipping-none");
    document.getElementById("payment-method").classList.add("payment-none");
    document.querySelector(".last-page").classList.remove("last-page-none");
    let numberid = Math.floor(Math.random() * 100000000);
    document.getElementById("order-number").textContent = numberid;
    document.getElementById("order-number").style.color = "crimson";
  }
});

document.getElementById("Continue").addEventListener("click", () => {
  localStorage.removeItem("cartitem");
});



