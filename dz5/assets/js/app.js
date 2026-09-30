const energy = document.getElementById('energy');
const hamsterButton = document.getElementById('hamster_pluse');
const coin = document.getElementById('coin');

function pressButton() {
  let currentEnergy = Number(energy.textContent);

  if (currentEnergy > 0) {
    let Mycoin = Number(coin.textContent);

    Mycoin++;
    currentEnergy--;

    coin.textContent = Mycoin;
    energy.textContent = currentEnergy;
  }
}

hamsterButton.onclick = pressButton;
