import { getUser } from '../libs/localStorageHelper.js';

let navigation = document.querySelector('.navigation');

(function () {
  if (getUser('user')) {
    navigation.innerHTML = `
		<nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container">
          <a class="navbar-brand" href="/index.html"
            ><img src="img/Logo.png" class="img-fluid" alt="..."
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse navigation__ul-container"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mb-2 mb-lg-0 navigation__list-container">
              <li class="nav-item navigation__list">
                <a
                  class="nav-link  navigation__link"
                  aria-current="page"
                  href="/index.html"
                  >Home</a
                >
              </li>
              <li class="nav-item navigation__list">
                <a
                  class="nav-link navigation__link"
                  aria-current="page"
                  href="/products.html"
                  >Our Products</a
                >
              </li>
              <li class="nav-item navigation__list">
                <a
                  class="nav-link navigation__link"
                  aria-current="page"
                  href="user_control_panel.html"
                  >Admin products</a
                >
              </li>             
            </ul>
            <div class="navigation__buttons d-flex justify-content-around">
              <div class="navigation__login">
                <a href="/login.html" class="navigation__link--secondary-links">
                  <span
                    class="iconify navigation__icon"
                    data-icon="bx:bx-user"
                  ></span>
                  <button class="navigation__icon-text logout">
                    Logout
                  </button>
                </a>
              </div>
              <div class="navigation__cart">
                <a href="/cart.html" class="navigation__link--secondary-links">
                  <span
                    class="iconify navigation__icon"
                    data-icon="bi:cart"
                  ></span>
                  <span class="navigation__icon-text">Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
		`;
  } else {
    navigation.innerHTML = `
		<nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container">
          <a class="navbar-brand" href="/index.html"
            ><img src="img/Logo.png" class="img-fluid" alt="..."
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse navigation__ul-container"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mb-2 mb-lg-0 navigation__list-container">
              <li class="nav-item navigation__list">
                <a
                  class="nav-link  navigation__link"
                  aria-current="page"
                  href="/index.html"
                  >Home</a
                >
              </li>
              <li class="nav-item navigation__list">
                <a
                  class="nav-link navigation__link"
                  aria-current="page"
                  href="/products.html"
                  >Our Products</a
                >
              </li>              
            </ul>
            <div class="navigation__buttons d-flex justify-content-around">
              <div class="navigation__login">
                <a href="/login.html" class="navigation__link--secondary-links">
                  <span
                    class="iconify navigation__icon"
                    data-icon="bx:bx-user"
                  ></span>
                  <span class="navigation__icon-text">Login</span>
                </a>
              </div>
              <div class="navigation__cart">
                <a href="/cart.html" class="navigation__link--secondary-links">
                  <span
                    class="iconify navigation__icon"
                    data-icon="bi:cart"
                  ></span>
                  <span class="navigation__icon-text">Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
		`;
  }

  const navLinks = document.querySelectorAll('.navigation__link');

  navLinks.forEach((link, iteration) => {
    if (window.location.href === link.href) {
      return link.classList.add('active');
    } else {
      return '';
    }
  });
  const logout = document.querySelector('.logout');
  if (logout !== null) {
    logout.onclick = function (e) {
      e.preventDefault();
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
      window.location.href = '/index.html';
    };
  }
})();
