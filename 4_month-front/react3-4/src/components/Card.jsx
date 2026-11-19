import cls from './Card.module.css';

export default function Card({ id, name, images, color, desc }) {
  const randomImageCard = () => {
    const randomImage = Math.floor(Math.random() * images.length);
    return images[randomImage];
  };
  const getInfoCard = () => {
    console.log('Id карточки: ' + id, 'имя товара: ' + name);
  };
  return (
    <>
      <div className={cls.main}>
        <div className={cls.cards}>
          <img className={cls.card__img} src={randomImageCard()} alt={name} />
          <h2 className={cls.card__name}>{name}</h2>
          <span className={cls.card__color}>{color}</span>
          <p className={cls.card__desc}>{desc}</p>
          <button className={cls.btn__card} onClick={getInfoCard}>
            Buy now
          </button>
        </div>
      </div>
    </>
  );
}
