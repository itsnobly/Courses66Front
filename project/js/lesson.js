const phoneButton = document.getElementById('phone_button');
const phoneInput = document.getElementById('phone_input');
const phoneResult = document.getElementById('phone_result');

const RegExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;
phoneButton.addEventListener('click', () => {
  if (RegExp.test(phoneInput.value)) {
    phoneResult.innerHTML = 'ok';
    phoneResult.style.color = 'green';
  } else {
    phoneResult.innerHTML = 'err';
    phoneResult.style.color = 'red';
  }
});
// табы
const tabSlider = document.querySelector('.tab_slider');
const tadContentBlocs = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');

const hideTabContent = () => {
  tadContentBlocs.forEach((block) => {
    block.style.display = 'none';
  });
  tabs.forEach((tab) => {
    tab.classList.remove('active');
  });
};

const showContent = (i = 0) => {
  tadContentBlocs[i].style.display = 'block';
  tabs[i].classList.add('active');
};
hideTabContent();
showContent();

let currentTab = 0;

setInterval(() => {
  currentTab++;
  if (currentTab > tabs.length - 1) {
    currentTab = 0;
  }
  hideTabContent();
  showContent(currentTab);
}, 3000);
