import { BASE_URL } from './configs/configs.js';
import { printBannerInTheDom } from './components/banner.js';
import { printCardsInTheDom } from './components/cards.js';
import { alert } from './components/alert.js';

let bgImg = document.querySelector('.hero');
let card = document.querySelector('.cards-container');

async function getInfoFromAPI() {
  let featuredProducts = document.querySelector('.featured-products');
  let specialOffers = document.querySelector('.special-offers');

  try {
    let response = await axios.get(`${BASE_URL}/banners`);
    let response2 = await axios.get(`${BASE_URL}/products`);

    let bannerObject = response.data;
    let cardsObject = response2.data;

    featuredProducts.classList.remove('hide');
    specialOffers.classList.remove('hide');

    let bannerForIndex = bannerObject.filter(function (banner) {
      return banner.id === 1;
    });

    printBannerInTheDom(bgImg, bannerForIndex);

    let filteredCards = cardsObject.filter(function (card) {
      return card.featured === true;
    });
    printCardsInTheDom(card, filteredCards);
  } catch (error) {
    alert('alert-danger', 'Something went wrong with the API ' + error);
  }
}
getInfoFromAPI();
