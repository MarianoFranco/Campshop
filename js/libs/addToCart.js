import {
  saveToLocalStorage,
  getStorageItem,
} from '../libs/localStorageHelper.js';

export const addProductToCart = function addToCart(arrayOfIconsToGoThrought) {
  arrayOfIconsToGoThrought.forEach((element) => {
    element.onclick = function () {
      let localStorageObject = {
        id: element.dataset.id,
        name: element.dataset.name,
        price: element.dataset.price,
        product_img: element.dataset.product_img,
      };
      element.classList.toggle('fa-shopping-cart');
      let products = getStorageItem('products');

      let isInStorage = products.find(
        (productObject) => productObject.id === localStorageObject.id,
      );

      if (isInStorage === undefined) {
        products.push(localStorageObject);
        saveToLocalStorage('products', products);
      } else {
        let removedProducts = products.filter(
          (productObject) => productObject.id !== localStorageObject.id,
        );
        element.classList.remove('fa-shopping-cart');
        saveToLocalStorage('products', removedProducts);
      }
    };
  });
};
