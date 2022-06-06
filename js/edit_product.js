import { alert, alert2 } from './components/alert.js';
import { BASE_URL, headers } from './configs/configs.js';

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

const name = document.querySelector('#name');
const foldedMasurements = document.querySelector('#folded_masurements');
const price = document.querySelector('#price');
const weight = document.querySelector('#weight');
const measurements = document.querySelector('#measurements');
const imgUrl = document.querySelector('#img_url');
const smallDesc = document.querySelector('#small_desc');
const toggleBtn = document.querySelector('#flexSwitchCheckDefault');
const description = document.querySelector('#description');
const specifications = document.querySelector('#specifications');

const submitBtn = document.querySelector('.edit-product__submit-btn');

async function getInfoFromAPI() {
  try {
    let response = await axios.get(`${BASE_URL}/products/${id}`);

    let products = response.data;
    console.log(response.data);

    name.value = products.name;
    foldedMasurements.value = products.folded_measurements;
    price.value = products.price;
    weight.value = products.weight;
    measurements.value = products.measurements;
    imgUrl.value = products.product_img;
    smallDesc.value = products.small_desc;
    description.value = products.description;
    specifications.value = products.specifications;
    toggleBtn.checked = products.featured;
  } catch (error) {
    alert('alert-danger', 'Something went wrong with the API' + error);
  }
}
getInfoFromAPI();

submitBtn.onclick = async function (event) {
  event.preventDefault();
  let updatedProduct = {
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

  const response = await axios.put(
    `${BASE_URL}/products/${id}`,
    updatedProduct,
    headers,
  );

  alert2('alert-success', 'Your product has been updated');
};
