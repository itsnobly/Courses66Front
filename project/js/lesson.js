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

// converter

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const getCurrency = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '../data/converter.json');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();
  xhr.onload = () => {
    const data = JSON.parse(xhr.response);
    convert(somInput, data);
    convert(usdInput, data);
    convert(eurInput, data);
  };
};

const convert = (element, data) => {
  element.oninput = () => {
    if (element.id === 'som') {
      usdInput.value = (element.value / data.usd).toFixed(2);
      eurInput.value = (element.value / data.eur).toFixed(2);
    }
    if (element.id === 'usd') {
      somInput.value = (element.value * data.usd).toFixed(2);
      eurInput.value = ((element.value * data.usd) / data.eur).toFixed(2);
    }
    if (element.id === 'eur') {
      somInput.value = (element.value * data.eur).toFixed(2);
      usdInput.value = ((element.value * data.eur) / data.usd).toFixed(2);
    }
    if (element.value === '') {
      somInput.value = '';
      usdInput.value = '';
      eurInput.value = '';
    }
  };
};

getCurrency();

// card switcher
// доработанный
const card = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');
let cardId = 1;
const getApi = (id) => {
  const response = fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  ).then((res) => res.json());
  return response;
};

const swapCard = (swap) => {
  if (swap === 'next') {
    cardId++;
  } else if (swap === 'prev') {
    cardId--;
  }

  if (cardId <= 0) {
    cardId = 200;
  }
  if (cardId > 200) {
    cardId = 1;
  }
  getApi(cardId).then((data) => {
    const text = data.completed ? 'completed' : 'in progress';
    const color = data.completed ? 'green' : 'red';

    card.innerHTML = `
         <p>${data.title}</p>
         <span>${data.id}</span>
         <p style = 'color: ${color}'>${text}</p>
         `;
  });
};
btnNext.addEventListener('click', () => swapCard('next'));
btnPrev.addEventListener('click', () => swapCard('prev'));
swapCard('');

//fetch запрос на https://jsonplaceholder.typicode.com/posts'

const getPosts = () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) =>
    res.json(),
  );
};

getPosts().then((posts) => console.log(posts));
