let name = prompt('Введите ваше имя');
let lastName = prompt('Введите вашу фамилию');
console.log('Здравствуйте ' + name, lastName + '!');
//string
let myBank = 'O!Банк';
//num
let mySumInBank = 14_500;
console.log('Ваш баланс' + mySumInBank);
//boolean
let blockBank = false;

let transfer = prompt('введите сумму которую хотите перевести');

if (blockBank == false && mySumInBank >= transfer) {
  mySumInBank = mySumInBank - transfer;
  console.log(
    'Блокировка банка, да/нет:' + blockBank,
    'Операция удалась! Вы перевели: ' + transfer,
    'остаток: ' + mySumInBank,
  );
} else {
  console.error(
    'Банк в состаянии блокировки: ' + blockBank,
    'или',
    'Не достаточно средств' + mySumInBank,
    'при переводе' + transfer,
  );
}
