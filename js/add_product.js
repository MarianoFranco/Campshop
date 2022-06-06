import { alert, alert2 } from './components/alert.js';
import { BASE_URL, headers } from './configs/configs.js';

let form = document.querySelector('.form');
let priceError = document.querySelector('.price-error');
let priceValidation = true;

const name = document.querySelector('#name');
const foldedMasurements = document.querySelector('#folded_masurements');
const price = document.querySelector('#price');
const weight = document.querySelector('#weight');
const measurements = document.querySelector('#measurements');
const imgUrl = document.querySelector('#img_url');
const smallDesc = document.querySelector('#small_desc');
const toggleBtn = document.querySelector('#switch');
const description = document.querySelector('#description');
const specifications = document.querySelector('#specifications');

form.onsubmit = async function (event) {
  event.preventDefault();

  try {
    validatePrice();

    if (priceValidation === true) {
      let newProduct = {
        name: name.value,
        folded_measurements: foldedMasurements.value,
        price: price.value,
        weight: weight.value,
        measurements: measurements.value,
        product_img: imgUrl.value,
        small_desc: smallDesc.value,
        description: description.value,
        specifications: specifications.value,
        featured: toggleBtn.checked,
      };

      let response = await axios.post(
        `${BASE_URL}/products`,
        newProduct,
        headers,
      );

      console.log(response);
      alert2('alert-success', 'Your product has been created successfully');

      name.value = '';
      foldedMasurements.value = '';
      price.value = '';
      weight.value = '';
      measurements.value = '';
      imgUrl.value = '';
      smallDesc.value = '';
      description.value = '';
      specifications.value = '';
      toggleBtn.checked = '';
    }
  } catch (error) {
    alert2('alert-danger', 'There was an error creating your product');
  }
};

function validatePrice() {
  let priceParsed = parseInt(price.value);

  if (isNaN(priceParsed)) {
    priceError.classList.add('show');

    priceValidation = false;
    alert2('alert-danger', 'Check that your data is right');
  } else {
    price.value = priceParsed;
    priceValidation = true;
    priceError.classList.remove('show');
  }
}
