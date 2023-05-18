//import navbar from

let cartArr=JSON.parse(localStorage.getItem(""))||[];

if(cartArr.length>0){
    displayCart();
    calculatePrice();
}else{
    document.getElementById("parent").innerHTML="Your Cart is currently empty";
}

const displayCart=()=>{
    cartArr.forEach(element => {
        let div=docu
    });
}