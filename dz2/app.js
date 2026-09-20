// 1 задание
let questionNumber = prompt('Задайте число от 1 до 9');

switch (questionNumber) {
  case '1':
    console.log('Меркурий');
    break;
  case '2':
    console.log('Венера');

    break;
  case '3':
    console.log('Земля');

    break;
  case '4':
    console.log('Марс');

    break;
  case '5':
    console.log('Юпитер');

    break;
  case '6':
    console.log('Сатурн');

    break;
  case '7':
    console.log('Уран');

    break;
  case '8':
    console.log('Нептун');
    break;
  case '9':
    console.log('Плутон');
    break;
}

// 2 задание

let temp = prompt('Введите значение температуры.');

if (temp < -10) {
  console.log('морозно');
} else if (temp >= -10 && temp <= 0) {
  console.log('Очень холодно');
} else if (temp > 0 && temp <= 10) {
  console.log('Холодно');
} else if (temp >= 11 && temp <= 20) {
  console.log('Прохладно');
} else if (temp >= 21 && temp <= 25) {
  console.log('Облачно');
} else if (temp >= 26 && temp <= 32) {
  console.log('Тепло');
} else if (temp >= 33) {
  console.log('Жарко');
}

// 3 задание

let areaCode = prompt('Введите код своего региона: 01, 02...');

switch (areaCode) {
  case '01':
    console.log('г. Бишкек');
    break;
  case '02':
    console.log('г. Ош');
    break;
  case '03':
    console.log('Баткенская область');
    break;
  case '04':
    console.log('Джалал-Абадская область');
    break;
  case '05':
    console.log('Нарынская область');
    break;
  case '06':
    console.log('Ошская область');
    break;
  case '07':
    console.log('Таласская область');
    break;
  case '08':
    console.log('Чуйская область');
    break;
  case '09':
    console.log('Иссык-Кульская область');
    break;
}

// 4 задание

let sum = prompt('Введите сумму которуювы хотите конвертировать с сом');
let convert = prompt('Выберите валюту: USD, RUB, EUR, KZT');

switch (convert) {
  case 'USD':
    sum = Math.round(sum / 87);
    break;
  case 'RUB':
    sum = Math.round(sum / 1.04);
    break;
  case 'EUR':
    sum = Math.round(sum / 100);
    break;
  case 'KZT':
    sum = Math.round(sum / 0.2);
    break;
}
console.log('Ваша сумма будет: ' + sum);
