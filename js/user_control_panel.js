import { BASE_URL, headers } from './configs/configs.js';
import { alert } from './components/alert.js';
import { filteringAnArray } from './libs/filteringAnArray.js';
import { printCardsToEditInTheDom } from './components/cards.js';
let card = document.querySelector('.cards-container');
let cardsObject;
async function getProductsToModify() {
  try {
    let response2 = await axios.get(`${BASE_URL}/products`);

    cardsObject = response2.data;

    printCardsToEditInTheDom(card, cardsObject);

    //delete the icons

    let deleteButtons = document.querySelectorAll('.card__trash-btn');

    deleteButtons.forEach((deleteBtn) => {
      deleteBtn.onclick = async function () {
        let answer = confirm('Do you want to delete this product?');
        if (answer) {
          let responseDelete = await axios.delete(
            `${BASE_URL}/products/${deleteBtn.dataset.id}`,
            headers,
          );
          console.log(responseDelete);
          getProductsToModify();
          alert('alert-success', 'Your article has been deleted succesfully');
        }
      };
    });
  } catch (error) {
    alert('alert-danger', 'Something is wrong with the conexion with the API');
  }
}
getProductsToModify();

//searchbar
let searchBarInput = document.querySelector('.products__input-text');

searchBarInput.onkeyup = function () {
  let productsFiltered = filteringAnArray(cardsObject, searchBarInput.value);

  printCardsToEditInTheDom(card, productsFiltered);
};
