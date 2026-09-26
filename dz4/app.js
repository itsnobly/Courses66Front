// задача 1

function capitalizeString(string) {
  string = string.toLowerCase();
  let FirstStr = string.slice(0, 1);
  FirstStr = FirstStr[0].toUpperCase();
  let rest = string.slice(1);

  return FirstStr + rest;
}

console.log(capitalizeString('ЕВГЕНИЙ'));

// задача 2

function charCount(str, sym) {
  let count = 0;

  let lowerStr = str.toLowerCase();
  let lowerChar = sym.toLowerCase();
  for (let symbol of lowerStr) {
    if (symbol === lowerChar) {
      count++;
    }
  }
  return count;
}
console.log(charCount('Abrakadabra', 'a'));
console.log(charCount('hello', 'z'));

// задача 3

let hidePhone = function (phoneNumber) {
  let mask = 'xx';

  let lastPart = phoneNumber.slice(0, -2) + mask;
  return lastPart;
};

console.log(hidePhone('+996 555 123 123'));

// задача 4

let arr = [50, 60, 60, 45, 71];

function evenOddSum(arr) {
  let even = 0;
  let odd = 0;
  let arrSum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even += arr[i];
    } else {
      odd += arr[i];
    }
  }
  return [even, odd];
}
console.log(evenOddSum(arr));
