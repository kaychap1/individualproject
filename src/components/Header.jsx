import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Link to="/"><img src="src/images/logo.png" alt="logo" /></Link>
      <div className={styles.titleContainer}>
        <h1>G H O S T</h1>
        <h2>COFFEE ROASTERS</h2>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <div className={styles.hours}>
          <p>Monday - Friday: 7:30am - 5pm</p>
          <p>Saturday - Sunday: 8am - 5pm</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
