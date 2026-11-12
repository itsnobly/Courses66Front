import './VideoContainer.css';
import Button from '../../components/Button/Button';

export default function VideoContainer() {
  return (
    <section className="block__info__video container">
      <div className="block__text">
        <div className="block__text-inf">
          <h2>Find Your Course That Makes Bright Future</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
            at diam magnis faucibus et faucibus gravida. malesuada fauci bus
            iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor,
            vulputate quam nec aliquam aliquam nisl. Auctor eros, iaculis quam
            nisi
          </p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
            hendrerit euismod fusce sit.
          </span>
        </div>
        <Button>Learn More</Button>
      </div>
      <div className="img-block">
        <a className="play" href="#">
          <img src="/image/img/5.png" alt="play" />
        </a>
      </div>
    </section>
  );
}
