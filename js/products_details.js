import { BASE_URL } from './configs/configs.js';
import { addProductToCart } from './libs/addToCart.js';
import { alert } from './components/alert.js';

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

const productsDetails = document.querySelector('.product-details');
const specifications = document.querySelector('.specifications');

async function getInfoFromAPI(id) {
  try {
    let response2 = await axios.get(`${BASE_URL}/products/` + id);

    let cardsObject = response2.data;

    productsDetails.innerHTML += `
            
    <div class="container">
    <div class="row product-details__title">
      <div class="col title-section">
        <h1 class="title-section__title">Product Details</h1>
        <div class="title-section__underline"></div>
      </div>
    </div>
    <div class="row product-details__product-info">
      <div class="col-lg-5">
        <div class="product-details__img-container">
          <img
            src="${cardsObject.product_img}"
            alt="${cardsObject.name}"
            class="product-details__img"
          />
        </div>
      </div>
      <div class="col-lg-7">
        <div class="product-details__info-container">
          <h2 class="product-details__product-title">
          ${cardsObject.name}
          </h2>
          <div class="title-section__underline"></div>
          <div class="product-details__price-container">
            <div class="product-details__price">${cardsObject.price} Nok</div>
            <div class="product-details__mva">Mva. Inc.</div>
          </div>
          <div class="title-section__underline"></div>
          <div class="product-details__product-data">
            <p>
            ${cardsObject.small_desc}
            </p>
            <div>
              <span>Measurements: </span>
              <span>${cardsObject.measurements}</span>
            </div>
            <div>
              <span>Folded measurements: </span>
              <span>${cardsObject.folded_measurements}</span>
            </div>
            <div>
              <span>Weight approx.:</span>
              <span>${cardsObject.weight}</span>
            </div>
          </div>
          <div class="title-section__underline"></div>
          <div class="product-details__buttons-container">
            <div class="product-details__amount">
              <i data-id="${cardsObject.id}" data-name="${cardsObject.name}" data-product_img="${cardsObject.product_img}" data-price="${cardsObject.price}" class="fas fa-cart-plus product-details__icon  align-self-end" ></i>                      
            </div>
            <a
              href="/cart.html"
              class="btn btn-secondary product-details__cart-btn"
            >
              <span
                class="iconify me-4 product-details__btn-icon"
                data-icon="bi:cart-plus"
              ></span
              >GO TO CART
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="row"></div>
  </div>

`;
    specifications.innerHTML += `
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 specifications__container">
            <ul
              class="nav nav-pills specifications__tablist"
              id="pills-tab"
              role="tablist"
            >
              <li
                class="nav-item specifications__list-item"
                role="presentation"
              >
                <button
                  class="nav-link active specifications__list-btn"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Description
                </button>
              </li>
              <li
                class="nav-item specifications__list-item"
                role="presentation"
              >
                <button
                  class="nav-link specifications__list-btn"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Specifications
                </button>
              </li>
              <li
                class="nav-item specifications__list-item"
                role="presentation"
              >
                <button
                  class="nav-link specifications__list-btn"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Reviews
                </button>
              </li>
            </ul>
            <div
              class="tab-content specifications__content-container"
              id="pills-tabContent"
            >
              <div
                class="tab-pane fade show active specifications__tab-pane"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
              ${cardsObject.description}
              </div>
              <div
                class="tab-pane fade specifications__tab-pane"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
              ${cardsObject.specifications}
              </div>
              <div
                class="tab-pane fade specifications__tab-pane"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione omnis tempore necessitatibus, culpa iure voluptates
                aperiam provident minima accusantium in iusto! Aliquam
                suscipit non enim nisi quis a voluptatibus hic.
              </div>
            </div>
          </div>
        </div>
      </div>
`;

    let toggleIcons = document.querySelectorAll('.product-details__icon');
    addProductToCart(toggleIcons);
  } catch (error) {
    alert('alert-danger', 'Something went wrong with the API' + error);
  }
}
getInfoFromAPI(id);
