import NavLink from '../NavLink';
import './Header.css';
import svgArrow from '../../../public/image/svg/down-arrow.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/">
          <h1>Education</h1>
        </a>

        <NavLink>
          <a className="nav__links">Home</a>
          <a className="nav__links">
            Courses <img src={svgArrow} alt="" />
          </a>
          <a className="nav__links">
            Page <img src={svgArrow} alt="" />
          </a>
          <a className="nav__links">
            Blog <img src={svgArrow} alt="" />
          </a>
          <a className="nav__links">Contact</a>
        </NavLink>
      </div>
    </header>
  );
}
