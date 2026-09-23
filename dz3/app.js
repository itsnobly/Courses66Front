// 1 задание

let personalNumbers = [
  '01212201212345',
  '11212201212345',
  '21212201212345',
  '11212201212345',
  '11212201212345',
  '01212201212345',
  '21212201212345',
];

let totalWoman = 0;
let totalMan = 0;
let totalCompany = 0;

for (let personal of personalNumbers) {
  if (personal[0] === '0') {
    totalCompany++;
  }
  if (personal[0] === '1') {
    totalWoman++;
  }
  if (personal[0] === '2') {
    totalMan++;
  }
}
console.log(
  'Женщин: ' + totalWoman,
  'Мужчин: ' + totalMan,
  'Компаний: ' + totalCompany,
);

// 2 задание

let numberCards = [
  '46782346',
  '45781218',
  '79874568',
  '12157845',
  '36151845',
  '41250895',
  '41201961',
];

let cardVisa = 0;

for (let card of numberCards) {
  if (card[0] === '4') {
    cardVisa++;
  }
}
console.log('Карт Visa: ' + cardVisa, 'из ' + numberCards.length);

// 3 задание

let numbers = [0, 3, 0, 12, 5, 0, 1];
let newNumbers = [];
for (let number of numbers) {
  if (number != 0) {
    newNumbers.push(number);
  }
}
console.log(newNumbers);

// задание 4

let gradeTenPoints = [10, 8, 6, 8, 9, 3, 7, 8];

let gradeFivePoints = [];

for (let points of gradeTenPoints) {
  if (points === 10 || points === 9) {
    gradeFivePoints.push(5);
  } else if (points === 8 || points === 7) {
    gradeFivePoints.push(4);
  } else if (points === 6) {
    gradeFivePoints.push(3);
  } else if (points === 3) {
    gradeFivePoints.push(2);
  }
}
console.log(gradeFivePoints);
