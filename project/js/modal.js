const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('#btn-get');
const btnCloseModal = document.querySelector('.modal_close');
const openModal = () => {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
};
const closeModal = () => {
  modal.style.display = 'none';
  document.body.style.overflow = '';
};
btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    closeModal();
  }
});

const showModalOnScroll = () => {
  modal.style.display = 'block';
};

const handleScroll = () => {
  let scrollY = Math.ceil(window.scrollY + window.innerHeight);
  let heightEnd = document.documentElement.scrollHeight;

  // console.log(scrollY, heightEnd);

  if (scrollY >= heightEnd - 10) {
    openModal();
    window.removeEventListener('scroll', handleScroll);
  }
};

window.addEventListener('scroll', handleScroll);
setTimeout(() => {
  openModal();
}, 10000);
