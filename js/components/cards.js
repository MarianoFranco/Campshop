import { addProductToCart } from '../libs/addToCart.js';
export const printCardsInTheDom = (
  domElementInHtml,
  arrayImGoingToGoTrough,
) => {
  domElementInHtml.innerHTML = '';
  arrayImGoingToGoTrough.forEach(({ id, name, product_img, price }) => {
    domElementInHtml.innerHTML += `      
        <div class="col card__col">
            <div class="card h-100 justify-content-between m-auto">
              <div class="card__topbody d-flex flex-column  ">                                      
                <i data-id="${id}" data-name="${name}" data-product_img="${product_img}" data-price="${price}" class="fas fa-cart-plus card__cart-icon  align-self-end" ></i>
                <img
                  src="${product_img}"
                  class="card-img-top align-self-center card__img"
                  alt="${name}"
                />
              </div>
              <div class="card__main text-center">
                <h3 class="card__title">${name}</h3>
                <h4 class="card__price">${price} Nok</h4>                
              </div>
              <div class="card__footer text-center ">
                <div class="card__line"></div>
                <a href="/products_details.html?id=${id}" class="card__link">
                    <span class="iconify me-4" data-icon="bi:plus-circle"></span>
                    <span class="card__show-text">Show details</span>
                </a>
              </div>
            </div>
          </div>
            `;
  });
  let toggleIcons = document.querySelectorAll('.card__cart-icon');
  //targeting the icons
  addProductToCart(toggleIcons);
};

export const printCardsToEditInTheDom = (
  domElementInHtml,
  arrayImGoingToGoTrough,
) => {
  domElementInHtml.innerHTML = '';
  arrayImGoingToGoTrough.forEach(({ id, product_img, name, price }) => {
    domElementInHtml.innerHTML += `        
        <div class="col card__col">
            <div class="card h-100 m-auto">
              <div class="card__topbody d-flex flex-column  ">              
                <button class="card__trash-btn" data-id="${id}">
                  <span class="iconify card__cart-icon align-self-end" data-icon="clarity:trash-line" data-toggle="modal" data-target="#exampleModalCenter"></span>                                                  
                </button>                  
                <img
                  src="${product_img}"
                  class="card-img-top align-self-center card__img"
                  alt="${name}"
                />
              </div>
              <div class="card__main text-center">
                <h3 class="card__title">${name}</h3>
                <h4 class="card__price">${price} Nok</h4>                
              </div>
              <div class="card__footer text-center ">
                <div class="card__line"></div>
                <a href="edit_product.html?id=${id}" class="card__link">
                    <span class="iconify" data-icon="akar-icons:edit"></span>
                    <span class="card__show-text">Edit product</span>
                </a>
              </div>
            </div>
          </div>
            `;
  });
};
