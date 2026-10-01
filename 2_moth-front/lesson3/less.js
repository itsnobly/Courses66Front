// Array — массив.
// Любой массив внутри своей структуры хранит информацию о количестве элементов, которые в нём находятся (свойство length).
// Индексация — отсчёт элементов массива начинается с 0.
// В непонятных ситуациях (например, при обращении к несуществующему индексу) JavaScript возвращает undefined.
let points = [10, 9, 9, 10];
console.log('Проверенно: ' + points.length);
points[4] = 8;
points[5] = 6;
// Получение последнего элемента массива с помощью метода .at() и отрицательного индекса.
let lastElement = points.at(-1);
console.log('Последний элемент: ' + lastElement);
points.push(10, 4, 5, 6);

// Метод .splice() принимает индекс, с которого нужно начать удаление, и количество удаляемых элементов.
// Если количество не указано, удалятся все элементы от этого индекса и до конца массива.
points.splice(8);
console.log('за все время: ' + points);
console.log('за первый урок: ' + points.length);

// LOOPS — циклы.
// Один проход цикла называется итерацией.
// Циклов в JS много (for, for..of, while, do..while).

// Цикл for..of перебирает сами значения элементов массива.
let totalPoints = 0;

for (let point of points) {
  console.log('цикл for of: ', point);
  totalPoints += point;
}
// Стандартный цикл for(инициализация; условие; шаг).
// i — итератор (счётчик цикла).
// 1 блок: создание счётчика.
// 2 блок: условие выполнения цикла.
// 3 блок: увеличение счётчика (инкремент i++) после каждого шага.
console.log('Итого: ' + totalPoints);
for (let i = 0; i < points.length; i++) {
  console.log('Урок ' + (i + 1) + ' (Баллы: ' + points[i] + ')');
}
// урок 1  ('Баллы:' 10)
// урок 2  ('Баллы:' 9)
//  в массиве можно хранить не только 1 тип данных

let visits = [1, 1, 0, 0, 'online', 'online', 'online', 'online'];
let Visits = 0;
let totalOfflineVisits = 0;
let totalOnlineVisits = 0;

for (let visit of visits) {
  //   if (visit === 'online' || visit === 1) {
  //     totalOnlineVisits++;
  //   }
  if (visit === 'online') {
    // totalVisits++;
    totalOnlineVisits++;
  }
  if (visit === 1) {
    // totalVisits++;
    totalOfflineVisits++;
  }
}

console.log('ИТого: ', totalOfflineVisits, totalOnlineVisits);
let finances = [50_000, 5000, -1000, -500, -12_000, -5500, -4000, 2000];
let totalIncome = 0;
let totalExpense = 0;
for (let item of finances) {
  if (item > 0) {
    totalIncome += item;
  }
  if (item < 0) {
    totalExpense += Math.abs(item);
  }
}
console.log('Итого доходов: ', totalIncome);
console.log('Итого расходлов: ', totalExpense);

let myBankCard = '4323878878878778';
let mask = '*';
let hiddenCard = '';
for (let i = 0; i < myBankCard.length; i++) {
  console.log('индекс = ', i, 'символ = ', myBankCard[i]);

  if (i >= 4 && i <= 13) {
    hiddenCard += mask;
  } else {
    hiddenCard += myBankCard[i];
  }
}
console.log('Банк кард', myBankCard);
console.log('скрытие', hiddenCard);
