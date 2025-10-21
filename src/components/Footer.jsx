import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import Wrapper from './Wrapper';
import footerLogo from '../images/footerlogo.png';
import footerFb from '../images/footerfb.png';
import footerIg from '../images/footerig.png';

const Footer = () => {
  return (
    <Wrapper>
      <footer className={styles.footer}>
        <nav>
          <div>
            <Link to = "/"><img src={footerLogo} alt="logo" /></Link>
            <a href="https://www.facebook.com/GH0STL1fe"><img src={footerFb} alt="fb" /></a>
            <a href="https://www.instagram.com/ghostcoffeeroaster/"><img src={footerIg} alt="ig" /></a>
          </div>
          <div>
            <p>
              Monday - Friday: 7:30am - 5pm <br />
              Saturday - Sunday: 8am - 5pm <br />
            </p>
            <p>
              Email:
              <a href="mailto:ghostcoffeeroaster@gmail.com">ghostcoffeeroaster@gmail.com</a>
            </p>
            <p>
              Address:
              <a href="https://maps.app.goo.gl/Tv46PnWUij6rQQ5o6">750 Stadium Ave, West Lafayette, IN 47906</a>
            </p>
          </div>
          <div>
            <h4>Site Map</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    </Wrapper>
  );
};

export default Footer;
