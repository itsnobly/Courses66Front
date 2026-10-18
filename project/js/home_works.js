const gmailInput = document.getElementById('gmail_input');
const gmailBtn = document.getElementById('gmail_button');
const gmailResult = document.getElementById('gmail_result');

const regExp = /^\w+@gmail\.com$/;
function checkGmail() {
  if (regExp.test(gmailInput.value)) {
    gmailResult.textContent = 'True';
    gmailResult.style.color = 'green';
  } else {
    gmailResult.textContent = 'False';
    gmailResult.style.color = 'red';
  }
}
gmailBtn.addEventListener('click', checkGmail);

const parentBlock = document.querySelector('.parent_block');
const childBlok = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;

const blocWidth = parentBlock.clientWidth - childBlok.offsetWidth;
const blocHeight = parentBlock.clientHeight - childBlok.offsetHeight;

let directionX = 1;
let directionY = 0;

function movieBlock() {
  childBlok.style.left = `${positionX}px`;
  childBlok.style.top = `${positionY}px`;

  positionX += directionX;
  positionY += directionY;

  if (positionX >= blocWidth && directionX === 1) {
    directionX = 0;
    directionY = 1;
  } else if (positionY >= blocHeight && directionY === 1) {
    directionX = -1;
    directionY = 0;
  } else if (positionX <= 0 && directionX === -1) {
    directionX = 0;
    directionY = -1;
  } else if (positionY <= 0 && directionY === -1) {
    directionX = 1;
    directionY = 0;
  }

  requestAnimationFrame(movieBlock);
}

movieBlock();

const seconds = document.getElementById('seconds');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let second = 0;
let myInterval = null;

start.onclick = () => {
  if (myInterval) return;

  myInterval = setInterval(() => {
    seconds.textContent = ++second;
  }, 1000);
};

stop.onclick = () => {
  clearInterval(myInterval);
  myInterval = null;
};

reset.onclick = () => {
  clearInterval(myInterval);
  myInterval = null;
  second = 0;
  seconds.textContent = second;
};
