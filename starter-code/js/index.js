function deleteItem(e){

  var productDelete = e.currentTarget.parentNode.parentNode;
  var productParent = productDelete.parentNode;
  productParent.removeChild(productDelete);

}

// function getPriceByProduct(itemNode){
//   var priceUnity = Number(document.querySelectorAll('.unity-price')[i].innerText);
//   return priceUnity;
// }

// function updatePriceByProduct(productPrice, index){
//   var productPrice = document.querySelectorAll('.product-price');
//   for (i=0; i < productPrice.length; i++) {
//     var quantityUnity = Number(document.querySelectorAll('.quantity')[i].value);
//     var total = quantityUnity * getPriceByProduct();
//     document.querySelectorAll('.total-price')[i].innerText = total;  
//   }
  // var sumAll = document.querySelectorAll('.total-price');
  // var acc = 0;
  // sumAll.forEach(function (item) {
  //   acc + Number(item.innerText);
  // });
  // document.querySelectorAll('.final-total').innerText = acc;
// 

// PROPUESTA DE LOS TA - AGRUPARLO TODO EN EL MISMO FOR

function updatePriceByProduct(productPrice, index) {
  var productPrice = document.querySelectorAll('.product-price');
  var quantities = document.querySelectorAll('.quantity');
  var totalPrices = document.querySelectorAll('.total-price');

  for (i = 0; i < productPrice.length; i++) {
    var quantityUnity = Number(quantities[i].value);
    var priceUnity = Number(productPrice[i].innerText);
    var total = quantityUnity * priceUnity;
    totalPrices[i].innerText = total;
  }
  
}

function getTotalPrice() {
// var products = document.querySelectorAll(.'product') < get an array of all 'product' in every line
// for () {
//   var price = products[ix].querySelector('.price').innerText
// } < get the price for each line
  updatePriceByProduct();
  var array = document.getElementsByClassName('total-price');
  var total = 0;
  for (i = 0; i < array.length; i++){
    total += parseFloat(array[i].innerText);
  }
  document.querySelector('.final-total').innerText = total;
  // updatePriceByProduct();
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  var i = 0;
  var original = document.getElementById('template');
  var clone = original.cloneNode(true);
  clone.id = 'template' + ++i;
  original.parentNode.appendChild(clone);

  var deleteButtons = document.getElementsByClassName('btn-delete');
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }

  var newName =  document.querySelectorAll('.template-product-name');

  var newInput = document.getElementsByClassName('new-item-name');
  
  for (i=0; i<newName.length; i++) {
    for (j=0; j<newInput.length; j++) {
      newName[i].innerText = newInput[j].value;
    }

  }

  var newPrice =  document.querySelectorAll('.product-price');

  var priceInput = document.getElementsByClassName('new-item-price');
  
  for (i=2; i<newPrice.length; i++) {
    for (j=0; j<priceInput.length; j++) {
      newPrice[i].innerText = priceInput[j].value;
    }

  }

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  
  }
};
