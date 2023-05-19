document.querySelector(".checkout-button").addEventListener("click", ()=>{
    document.getElementById("first").classList.add("first-none")
    document.querySelector(".second").classList.remove("second1")
    document.getElementById("shiping-input").classList.add("shipping-none")
    document.getElementById("payment-method").classList.add("payment-none")
    document.querySelector(".last-page").classList.add("last-page-none")
    document.getElementById("inputs").style.display= "block"


})

document.getElementById("next").addEventListener("click",()=>{
if(document.getElementById("shiping-input").classList.contains("shipping-none") &&   document.getElementById("payment-method").classList.contains("payment-none")){

    document.getElementById("inputs").style.display= "none"
     document.getElementById("contacts").style.color = "black"
     document.getElementById("shipping").style.color = "orangered"
   document.getElementById("shiping-input").classList.remove("shipping-none")


}else if(!document.getElementById("shiping-input").classList.contains("shipping-none")){
   
    document.getElementById("first").classList.add("first-none")
    document.getElementById("shiping-input").classList.add("shipping-none")
    document.getElementById("shipping").style.color = "black"
    document.getElementById("payment").style.color = "orangered"
    document.getElementById("payment-method").classList.remove("payment-none")
}else{
    document.querySelector(".second").classList.add("second1")
    document.getElementById("first").classList.add("first-none")
    document.getElementById("shiping-input").classList.add("shipping-none")
    document.getElementById("payment-method").classList.add("payment-none")
    document.querySelector(".last-page").classList.remove("last-page-none")
    let numberid  = Math.floor(Math.random()*100000000)
document.getElementById("order-number").textContent = numberid
document.getElementById("order-number").style.color = "crimson"
}

})



