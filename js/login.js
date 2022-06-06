import { BASE_URL } from './configs/configs.js';
import { printBannerInTheDom } from './components/banner.js';
import { alert, alert2 } from './components/alert.js';
import { lengthValueTexbox, testEmailAddress } from './libs/validation.js';

const loginBg = document.querySelector('.login__bg-img');

async function getInfoFromAPI() {
  try {
    let response = await axios.get(`${BASE_URL}/banners`);

    let bannerObject = response.data;

    let bannerForIndex = bannerObject.filter(function (banner) {
      return banner.id === 2;
    });

    printBannerInTheDom(loginBg, bannerForIndex);
  } catch (error) {
    alert('alert-danger', 'Something went wrong with the API' + error);
  }
}
getInfoFromAPI();

let form = document.querySelector('.form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

form.onsubmit = async function (event) {
  event.preventDefault();

  if (lengthValueTexbox(password.value, 6) && testEmailAddress(email.value)) {
    try {
      const response = await axios.post(`${BASE_URL}/auth/local`, {
        identifier: email.value,
        password: password.value,
      });
      console.log(response.data);
      console.log(response.data.user);
      localStorage.setItem('jwt', response.data.jwt);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      window.location.href = './user_control_panel.html';
    } catch (error) {
      alert(
        'alert-danger',
        'Something went wrong with the conection with the API',
      );
    }
  } else {
    alert2('alert-danger', 'Please, insert the right values to login');
  }
};
