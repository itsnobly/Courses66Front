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
const childBlock = document.querySelector('.child_block');

let position = 0;

const postitionOnLeft = parentBlock.clientWidth - childBlock.offsetWidth;

const moveBlock = () => {
  if (position !== postitionOnLeft) {
    position++;
    childBlock.style.left = `${position}px`;
    requestAnimationFrame(moveBlock);
  }
};
moveBlock();
