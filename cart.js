//import navbar from

let cartArr=JSON.parse(localStorage.getItem("cartItems"))||[];

if(cartArr.length>0){
    displayCart();
    calculatePrice();
}else{
    let div = document.createElement("div");
    
    let contentDiv=document.createElement("h3");
    contentDiv.textContent="MY CART";
    let text=document.createElement("p");
    text.textContent="Your Cart is currently empty";
    let returnBtn=document.createElement("button");
    returnBtn.textContent="Continue shopping ->";
    returnBtn.setAttribute("id","goHome");
    returnBtn.addEventListener("click",GoHOmePage);
    div.append(contentDiv,text,returnBtn);
    document.getElementById("parent").append(div);
}

const displayCart=()=>{
   
    let cartTable = document.getElementById('cart-table');
    let cartTableBody = document.getElementById('cart-items');
  
    cartTableBody.innerHTML = '';
  
    if (cartArr.length===0) {
      cartTable.style.display = 'none';
    } else {
      cartTable.style.display = 'table';
    cartArr.forEach(element => {
       
        let tr=document.createElement("tr");

        let td1=document.createElement("td");
        let tdBox=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src",element.image);

       let contentBox=document.createElement("div");
        let name=document.createElement("p");
        name.textContent=element.name;
        contentBox.appendChild(name)
        tdBox.append(image,contentBox)

        let td2=document.createElement("td");
        let quantityWrapper = document.createElement('div');
        quantityWrapper.classList.add('quantity-wrapper');
  
        let decreaseBtn = document.createElement('button');
        decreaseBtn.textContent = '-';
        decreaseBtn.classList.add('quantity-btn');
        decreaseBtn.addEventListener('click', function () {
          decreaseQuantity(element);
        });
        quantityWrapper.appendChild(decreaseBtn);
  
        let quantityValue = document.createElement('span');
        quantityValue.textContent = element.quantity;
        quantityWrapper.appendChild(quantityValue);
  
        let increaseBtn = document.createElement('button');
        increaseBtn.textContent = '+';
        increaseBtn.classList.add('quantity-btn');
        increaseBtn.addEventListener('click', function () {
          increaseQuantity(element);
        });
        quantityWrapper.appendChild(increaseBtn);
  
        td2.appendChild(quantityWrapper);
        tr.appendChild(td2);
  
        let total = document.createElement('td');
        total.textContent = element.price * element.quantity;
        tr.append(td1,td2,total);
        cartTableBody.appendChild(tr);
      });
    }
  }
  
  
function decreaseQuantity(item) {
    if (item.quantity > 1) {
      item.quantity--;
      updateCart();
    }
  }
  
  function increaseQuantity(item) {
    item.quantity++;
    updateCart();
  }
//   function updateCart() {
//     let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     displayCart();
//   }
function updateCart() {
    localStorage.setItem('cartItems', JSON.stringify(cartArr));
    displayCart();
  }
  
/* id:2,
image:"https://cdn.shopify.com/s/files/1/0511/9066/1293/products/Pocket_SA_MF_TalesLotus_1.jpg?v=1678356415",
name:"Hand Sanitizer Tales of Lotus",
price: "130$"
},
{*/