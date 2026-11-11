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

const getCurrency = async () => {
  try {
    const response = await fetch('../data/converter.json');
    if (!response.ok) {
      throw new Error('ошибка');
    }
    const data = await response.json();

    convert(somInput, data);
    convert(usdInput, data);
    convert(eurInput, data);
  } catch (e) {
    console.error(e);
  }
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
const todoApi = `https://jsonplaceholder.typicode.com/todos/`;
const getApi = async (id) => {
  const response = await fetch(`${todoApi}${id}`);
  if (!response.ok) {
    throw new Error('ошибка');
  }
  const data = await response.json();
  return data;
};

const swapCard = async (swap) => {
  try {
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

    const data = await getApi(cardId);
    const text = data.completed ? 'completed' : 'in progress';
    const color = data.completed ? 'green' : 'red';

    card.innerHTML = `
         <p>${data.title}</p>
         <span>${data.id}</span>
         <p style = 'color: ${color}'>${text}</p>
         `;
  } catch (error) {
    console.error(error);
  }
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
// погода

const searchInput = document.getElementById('searchInput');
const btnSearch = document.getElementById('search');
const temp = document.querySelector('.temp');
const city = document.querySelector('.city');

// https://api.openweathermap.org/data/2.5/weather
// Api key - a083c67b09d81a2f8c19c2f3e83c0f73
// query parametrs - парметры запроса

const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather';
const WEATHER_API_KEY = 'a083c67b09d81a2f8c19c2f3e83c0f73';

const getWeather = async () => {
  try {
    if (searchInput.value === '') return;

    const response = await fetch(
      `${WEATHER_API}?q=${searchInput.value}&units=metric&lang=ru&appid=${WEATHER_API_KEY}`,
    );
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.statusText}`);
    }
    const data = await response.json();
    temp.innerHTML = data.name;
    city.innerHTML = Math.round(data.main.temp) + '&deg;C';
    city.style.color = 'green';
    searchInput.value = '';
  } catch (error) {
    console.error(error);
    city.innerHTML = `Введите правильное название города: ${searchInput.value}`;
    city.style.color = 'red';
  }
};
btnSearch.addEventListener('click', getWeather);
