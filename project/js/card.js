const allCards = document.getElementById('card');

const ApiCard = 'https://jsonplaceholder.typicode.com/posts';

const getApiCard = async () => {
  const response = await fetch(ApiCard);
  if (!response.ok) {
    throw new Error('ошибочка');
  }
  const data = await response.json();
  return data;
};

const renderCard = async () => {
  try {
    const data = await getApiCard();
    allCards.innerHTML = data
      .map((card) => {
        return `
            <div class="card">
                <h2 class="card-title">${card.title}</h2>
                <p class="card-body">${card.body}</p>
                <span class="card-id">${card.id}</span>
            </div>
            `;
      })
      .join('');
  } catch (error) {
    console.error(error);
  }
};
renderCard();
