export const saveToLocalStorage = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageItem = function (key) {
  if (localStorage.getItem(key) !== null) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return [];
  }
};

export const getUser = function (key) {
  return localStorage.getItem(key);
};

export const getTotalPrice = (key) => {
  if (!key && getStorageItem(key).length === 0) {
    return 0;
  }

  let price = 0;
  getStorageItem(key).forEach((element) => {
    price += parseInt(element.price);
  });

  return price;
};
