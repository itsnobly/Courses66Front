let arrays = [5, 4, 1, 20, 0, -4, -8, 100, 4, -74, -5, 0, 0, 1, 2, 7];
const mapRes = arrays.map((arr) => {
  return arr * 5;
});

console.log(JSON.stringify(mapRes));

const filter = mapRes.filter(function (arr) {
  return arr > 0;
});
console.log(JSON.stringify(filter));

const names = [
  'алиса',
  'ЖЕНЯ',
  'артем',
  'ПАВЕЛ',
  'ЖАКШЫЛЫК',
  'антон',
  'айсулуу',
  'канаим',
];

const capitalization = names.map((name) => {
  let first = name.slice(1).toLowerCase();
  let second = name[0].toUpperCase();
  return second + first;
});
console.log(JSON.stringify(capitalization));

const filterSimvol = capitalization.filter(function (letter) {
  return letter[0] === 'А';
});
console.log(JSON.stringify(filterSimvol));
