const generate = document.getElementById('generate');
const randomNumbersPass = document.querySelectorAll('.random-number');

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getNumber() {
  for (let random of randomNumbersPass) {
    random.textContent = randomNumber(0, 10);
  }
}
getNumber();
generate.addEventListener('click', getNumber);
