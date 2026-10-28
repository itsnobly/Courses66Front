// 1
const regExp = /^\d+$/;
const containsOnlyDigits = (str) => {
  return regExp.test(str);
};
console.log(containsOnlyDigits('12345'));
console.log(containsOnlyDigits('12a45'));

// 2

const second = setInterval(() => {
  console.log('Прошла секунда');
}, 1000);

// 3

const count = () => {
  let i = 1;
  const interval = setInterval(() => {
    if (i > 10) {
      clearInterval();
    } else {
      const result = i++;
      console.log(result);
    }
  }, 1000);

  return interval;
};

console.log(count());

// 4

const block = document.querySelector('.block');

function bacgroundBlock() {
  block.classList.toggle('target_color_block');
}

block.addEventListener('click', bacgroundBlock);

// 5

const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.json');

  xhr.setRequestHeader('Accepr', 'applicstion/json');
  xhr.send();
  xhr.onload = () => {
    const data = JSON.parse(xhr.response);
    console.log(data);
  };
};
getData();
