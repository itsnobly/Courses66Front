const cards = document.querySelectorAll('.card');

function selectBtn(e) {
  for (let card of cards) {
    card.classList.add('card-collapse');
  }
  let clickedBtn = e.currentTarget;
  clickedBtn.classList.remove('card-collapse');
}
for (let btn of cards) {
  btn.addEventListener('click', selectBtn);
}
