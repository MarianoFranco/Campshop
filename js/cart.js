import {
  getStorageItem,
  saveToLocalStorage,
  getTotalPrice,
} from './libs/localStorageHelper.js';
import { alert2 } from './components/alert.js';
//get total price from LocalStorage
let total = getTotalPrice('products');

function printCardToTheCart() {
  let cartProducts = getStorageItem('products');

  let productContainer = document.querySelector('.cart__product-list');

  if (cartProducts.length === 0) {
    alert2('alert-danger', 'There are not products in your cart list');
  }

  productContainer.innerHTML = '';
  cartProducts.forEach(({ product_img, id, price, name }) => {
    productContainer.innerHTML += `
            <div class="cart__card-container">
              <div class="row justify-content-around g-0">
                <div class="col-lg-4 product-list__product-img-container">
                  <img
                    src="${product_img}"
                    class="img-fluid rounded-start product-list__product-img"
                    alt="..."
                  />
                </div>
                <div class="col-lg-8">
                    <div class="row" >
                      <div class="col-lg-8">
                        <h3 class="product-list__title"><a href="/products_details.html?id=${id}" class="product-list__link">${name}</a></h3>                        
                        <div class="product-list__quantity-container">
                          <i class="fas fa-minus product-list__quantity-icon minus" data-price="${price}" ></i>
                          <span class="product-list__quantity" data-price="${price}">1</span>
                          <i class="fas fa-plus product-list__quantity-icon plus" data-price="${price}"></i>
                        </div>
                      </div>
                      <div class="col-lg-4 product-list__price-container">
                        <i data-id="${id}" data-price="${price}" class="far fa-trash-alt product-list__trash"></i>
                        <div class="product-list__price">
                          <span class="product-list__amount" data-id="${id}">${price}<span>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="product-list__underline"></div>

            `;
  });

  let totalPrice = document.querySelector('.summary__total-price');
  let priceData = document.querySelector('.summary__price-data');

  priceData.innerHTML = `
              <p class="total-price">${total}</p>
              <p>Free</p>
  
            `;
  totalPrice.innerHTML = `
              <p class="total-price">${total}</p>
             
  
            `;
  //get quantity
  let plusIcons = document.querySelectorAll('.plus');
  let minusIcons = document.querySelectorAll('.minus');

  //going through plus icon
  plusIcons.forEach((icon) => {
    //event onclick
    icon.onclick = function () {
      total += parseInt(icon.dataset.price);

      //getting value of the span and sum 1 and print in the dom
      this.parentElement.childNodes[3].innerHTML =
        parseInt(this.parentElement.childNodes[3].innerText) + 1;

      //getting the price from the DOM and changing the value
      priceData.innerHTML = `       
        <p class="total-price">${total}</p>
        <p>Free</p>
      `;

      //getting the price from the DOM and changing the value
      totalPrice.innerHTML = `
        <p class="total-price">${total}</p>
      `;
    };
  });
  minusIcons.forEach((icon) => {
    //event onclick
    icon.onclick = function () {
      console.log(total);
      console.log(this.parentElement.childNodes[3].innerText);
      console.log(this.parentElement.childNodes[3].innerHTML);

      //getting the value of the span() in the DOM
      let valueOfTheSpan = this.parentElement.childNodes[3];

      //if the value is more than 0 then rest the total, else put the value in 0
      if (valueOfTheSpan.innerText > 0) {
        total -= parseInt(icon.dataset.price);

        console.log(total);
        valueOfTheSpan.innerHTML = parseInt(valueOfTheSpan.innerText) - 1;
        priceData.innerHTML = `
              <p class="total-price">${total}</p>
              <p>Free</p>
  
          `;
        totalPrice.innerHTML = `
              <p class="total-price">${total}</p>
          `;
      } else {
        valueOfTheSpan.innerHTML = 0;

        priceData.innerHTML = `
        <p class="total-price">${total}</p>
        <p>Free</p>

          `;
        totalPrice.innerHTML = `
        <p class="total-price">${total}</p>
    `;
      }
    };
  });

  let deleteButtons = document.querySelectorAll('.product-list__trash');

  deleteButtons.forEach((button) => {
    button.onclick = function (e) {
      let localStorageObject = {
        id: button.dataset.id,
      };

      let removedProducts = cartProducts.filter(
        (productObject) => productObject.id !== localStorageObject.id,
      );

      saveToLocalStorage('products', removedProducts);

      printCardToTheCart();

      let valueOfTheSpan =
        this.parentElement.parentElement.childNodes[1].childNodes[3]
          .childNodes[3];

      let quantityValue = parseInt(valueOfTheSpan.innerText);
      let priceValue = parseInt(button.dataset.price);
      let result = quantityValue * priceValue;

      total -= result;
      priceData.innerHTML = `
              <p class="total-price">${total}</p>
              <p>Free</p>
  
            `;
      totalPrice.innerHTML = `
              <p class="total-price">${total}</p>
             
  
            `;
    };
  });
}

printCardToTheCart();
