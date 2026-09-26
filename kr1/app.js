let arrs = [1, 2, 3, 4, 5, 6, 7];

function shuffle(arrs) {
  let shuffleArrs = [];

  for (let i = arrs.length - 1; i >= 0; i--) {
    let random = getRandom(0, i);
    let shuffleRandom = arrs.splice(random, 1);
    shuffleArrs.push(shuffleRandom[0]);
  }
  return shuffleArrs;
}
function getRandom(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}
console.log(shuffle(arrs));

// console.log(getRandom(0, 10));

// let elements = ['туз', 'король', 'дама', 'валет', '10', '9', '8'];

// function shuffleTwo(elements) {
//   let elementsShuffle = [];
//   for (let i = elements.length - 1; i >= 0; i--) {
//     let elRand = getRandomTwo(0, i);
//     let randomEl = elements.splice(elRand, 1);
//     elementsShuffle.push(randomEl[0]);
//   }
//   return elementsShuffle;
// }
// function getRandomTwo(min, max) {
//   let elRand = Math.floor(Math.random() * (max - min + 1) + min);
//   return elRand;
// }
// console.log(shuffleTwo(elements));
