console.log('Lesson 2');

// 1. number
// 2. string
// 3. boolean (true, false)
// 4. undefined
// 5. null
// 6. object

// 7. bigint
// 8. symbol

let points = 0; // max 80
let appointments = 1; // max 8
let testPoints = 100; // max 100

// camel case

let passByPoints = points >= 40;
let passByAppointments = appointments >= 4;
let passByTestPoints = testPoints >= 50;

// тернарный оператор: условие ? значение1 : значение2;

console.log('Прошел по баллам: ', passByPoints ? 'Да' : 'Нет');
console.log('Прошел по посещениям: ', passByAppointments ? 'Да' : 'Нет');
console.log('Прошел по баллам за тесты: ', passByTestPoints ? 'Да' : 'Нет');

let agree = false;
console.log('Клиент', agree ? 'согласен' : 'не согласен');

// && || !

if (passByPoints && passByAppointments && passByTestPoints) {
  console.log('Бесплатный повтор');
} else {
  console.warn('Повтор, необходимо оплатить...');
}

let hasInternetConnection = false;
let hasCash = true;
let hasPrinterPaper = true;
let cardreaderOk = true;

if (!hasInternetConnection || !hasCash || !hasPrinterPaper || !cardreaderOk) {
  console.error('Банкомат не исправен...');
} else {
  console.log('Банкомат работает...');
}

let fuelType = prompt('Тип топлива: 92, 95, Газ, 98');
let amount = prompt('Введите сумму заправки');
let clientCard = prompt('Введите номер  карты');

let priceForLiter = 0;

if (fuelType === '92') {
} else if (fuelType === '95') {
  priceForLiter = 100;
} else if (fuelType === '98') {
  priceForLiter = 120;
} else if (fuelType === 'Газ') {
  priceForLiter = 42;
}

switch (fuelType) {
  case '92':
    priceForLiter = 65;
    break;
  case '95':
    priceForLiter = 100;
    break;
  case '98':
    priceForLiter = 120;
    break;
  case 'Газ':
    priceForLiter = 42;
    break;
}

let liters = amount / priceForLiter;

let bonuces = 0;

if (clientCard === 'silver') {
} else if (clientCard === 'gold') {
  bonuces = Math.trunc(liters) * 0.75;
} else if (clientCard === 'platinum') {
  bonuces = Math.trunc(liters);
}

switch (clientCard) {
  case 'silver':
    bonuces = Math.trunc(liters) * 0.5;
    break;
  case 'gold':
    bonuces = Math.trunc(liters) * 0.75;
    break;
  case 'platinum':
    bonuces = Math.trunc(liters);
    break;
}

console.log('Заправка на: ' + liters + 'л. Бонусы' + bonuces);

let signalLevel = 5;
switch (signalLevel) {
  case 5:
    console.log(' U+1F7E2, Сигнал отличный!');
    break;
  case 4:
    console.log('Сигнал хороший!');
    break;
  case 3:
    console.log(' U+1F7E0 Сигнал нормальный!');
    break;
  case 2:
  case 1:
    console.log('  Сигнал плохой U+1F534');
    break;
}
let checkAmount = prompt('Введите суммму чека');
if (checkAmount >= 800 && checkAmount < 2000) {
  bonuces = Math.trunc(checkAmount / 100);
} else if (checkAmount >= 2000 && checkAmount < 5000) {
  bonuces = Math.trunc(checkAmount / 100) * 2;
} else if (checkAmount >= 5000) {
  bonuces = Math.trunc(checkAmount / 100) * 3;
}
console.log('Сумм апоркупки ' + checkAmount + 'Бонусы ' + bonuces);
