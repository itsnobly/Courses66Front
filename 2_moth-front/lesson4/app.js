enableDarkMode();

// function decloration - опредеелнгите функции (hoising = поднятие, подъем)

function enableDarkMode() {
  console.log('ef');
  document.body.style.backgroundColor = '#333';
}

function enableLightMode() {
  document.body.style.backgroundColor = '#eee';
}
enableLightMode();

enableDarkMode();

// function expression =- функцаионалльные выражения
let enableDarkModeExpr = function () {
  console.log('ef');
  document.body.style.backgroundColor = '#333';
};
let enableLightModeExpr = function () {
  document.body.style.backgroundColor = '#eee';
  // enableLightMode();
};

function applyDisc(price, dick) {
  let discValue = (price / 100) * dick;
  let priceWithValue = price - discValue;
  return priceWithValue;
}
let price1000dick50 = applyDisc(1000, 50);
console.log(price1000dick50);
console.log(applyDisc(10000, 5));
console.log(applyDisc(15500, 5));

function getArraySum(array) {
  let result = 0;
  for (let item of array) {
    result += item;
  }
  return result;
}

let points = [10, 1, 3, 5, 6, 7, 8];
let totalpoints = getArraySum(points);

console.log(totalpoints);

let repeat = function (string, count) {
  let result = '';
  for (let i = 0; i < count; i++) {
    result += string;
  }
  return result;
};

repeat('*', 5);
console.log(repeat('*', 511));

function randomaizer(min, max) {}
// return Math.floor(Math.random() * (max - min)) + min;
