//Product Controller-It is a glue between View and Model
//Controller- I/O View Layer


import Product from "../models/product.js";
import productOperations from "../services/product-operations.js"; 
//DATA EXCHANGE BTW VIEW AND MODEL

async function loadPizzas(){
    const pizzas= await productOperations.loadProducts();
    console.log('Pizzas are',pizzas);
    for(let pizza of pizzas){
      preparePizzaCard(pizza);
    }
}
loadPizzas();

function addToCart(){
  console.log("add to card called",this);
  const currentButton= this;
  const pizzaId= currentButton.getAttribute('product-id');
  console.log("pizza id is ", pizzaId);
  productOperations.search(pizzaId); 
  printBasket();
}



function printBasket(){
  const cartProducts=productOperations.getProductsInCart();
  const basket= document.querySelector('#basket');
  basket.innerHTML='';
  console.log("products are here::",cartProducts)
  for(let product of cartProducts){
    const li=document.createElement('li');    
    li.innerText=`${product.name} ${product.price}`;
    basket.appendChild(li);
  }
  const sum = totalSum(cartProducts);
  const sumdiv = document.querySelector('#sum');
  sumdiv.innerText = sum;
  const totalGstAmount=totalGst(cartProducts);
  const gstinn=document.querySelector('#gst');
  gstinn.innerText=totalGstAmount;
  // const finaleBill=finalBill(cartProducts)
  // const final=document.querySelector('#final');
  // final.innerText=finaleBill
}

function totalSum(cartProducts){
  const sum=cartProducts.reduce((acc=0,currentVal)=>{
    acc = acc+parseFloat(currentVal.price)
    return acc;
  },0)
  return sum;
}

function totalGst(cartProducts) {
  const totalGstAmount = cartProducts.reduce((acc=0, product) => acc + (product.price * .18), 0);
  return totalGstAmount;
}

// function finalBill(cartProducts) {
//   const totalGstAmount = cartProducts.reduce((acc, product) => acc + (product.price * .18), 0);
//   const subtotal = cartProducts.reduce((acc, product) => acc + product.price, 0);
//   const finalBillAmount = subtotal + totalGstAmount;
//   return finalBillAmount;
// }



function preparePizzaCard(pizza){
  const outputDiv= document.querySelector('#output')
  const colDiv = document.createElement('div');
  colDiv.className='col-4';
  const cardDiv= document.createElement('div');
  cardDiv.className='card';
  cardDiv.style="width: 18rem;";
  colDiv.appendChild(cardDiv) 
  const img= document.createElement('img');
  img.src=pizza.url;
  img.className='card-img-top';
  cardDiv.appendChild(img);
  const cardBody=document.createElement('div');
  cardBody.className='card-body';
  cardDiv.appendChild(cardBody);
  const h5=document.createElement('h5');
  h5.className='card-title';
  h5.innerText= pizza.name;
  const pTag=document.createElement('p');
  pTag.className='card-text'
  pTag.innerText=pizza.description;
  const button= document.createElement('button')
  button.setAttribute('product-id',pizza.id);
  button.addEventListener('click',addToCart)
  button.innerText='Add to Card';
  button.className='btn btn-primary'
  cardBody.appendChild(h5);
  cardBody.appendChild(pTag)
  cardBody.appendChild(button);
  outputDiv.appendChild(colDiv);
}


// window.addEventListener(
//     'load',bindevents
// )
        
// function bindevents(){
//     document.getElementById('clickme').addEventListener(
//         'click',
//         ()=>{
//         alert("Pay The Bill")
//         }
//     )
// }