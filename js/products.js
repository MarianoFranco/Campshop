import { BASE_URL } from './configs/configs.js';
import { printCardsInTheDom } from './components/cards.js';
import { filteringAnArray } from './libs/filteringAnArray.js';
import { alert } from './components/alert.js';

let cardsContainer = document.querySelector('.cards');

async function getInfoFromAPI() {
  try {
    let response2 = await axios.get(`${BASE_URL}/products`);

    let cardsObject = response2.data;

    printCardsInTheDom(cardsContainer, cardsObject);

    let searchBarInput = document.querySelector('.products__input-text');

    searchBarInput.onkeyup = function (event) {
      cardsContainer.innerHTML = '';

      let productsFiltered = filteringAnArray(
        cardsObject,
        searchBarInput.value,
      );
      printCardsInTheDom(cardsContainer, productsFiltered);
    };
  } catch (error) {
    alert('alert-danger', 'Something went wrong with the API ' + error);
  }
}
getInfoFromAPI();

let paginationNumbers = document.querySelectorAll('.pagination__link');

console.log(paginationNumbers);

paginationNumbers.forEach((number) => {
  number.onclick = function () {
    number.classList.toggle('active');
  };
});
