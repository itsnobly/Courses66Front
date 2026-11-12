import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__column footer__education">
            <h3>Education</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              vestibulum euismod nullam elementum. Urna, posuere nisi sit
              gravida.
            </p>

            <h3 className="footer__social-title">Follow Us</h3>
            <img
              className="footer__socials"
              src="/image/img/2.png"
              alt="Social media"
            />
          </div>

          <div className="footer__column">
            <h3>Feature Links</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Graduation</a>
              </li>
              <li>
                <a href="#">Scholarship</a>
              </li>
              <li>
                <a href="#">Admissions</a>
              </li>
              <li>
                <a href="#">International</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#">Language</a>
              </li>
              <li>
                <a href="#">WordPress</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Contact Us</h3>

            <div className="footer__contacts">
              <p>
                <img src="/image/svg/local.svg" alt="" />
                230, Mirpur Area, Mirpur 10,
                <br />
                Dhaka, Bangladesh
              </p>

              <a href="tel:+01748457269">+017 4845 7269</a>
              <a href="mailto:info@gmail.com">info@gmail.com</a>
              <a href="#">www.yourdomain.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
