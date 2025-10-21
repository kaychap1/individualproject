
import { Link } from 'react-router-dom';
import styles from '../components/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h2>Taste the best of the best</h2>
      </div>
      <main>
        <section className={styles.hero}>
          <h1>Welcome to Ghost Coffee Roasters</h1>
          <h3>Your journey to the perfect cup of coffee starts here.</h3>
        </section>
        <section className={styles.cards}>
          <div className={styles.card}>
            <img src="/images/aboutus2.jpg" alt="Our Story" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Our Story</h3>
              <p className={styles.cardDescription}>Learn about our passion for coffee and our commitment to quality.</p>
              <Link to="/about" className={styles.button}>Read More</Link>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/images/contact.jpg" alt="Contact Us" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Contact Us</h3>
              <p className={styles.cardDescription}>Get in touch with us for any inquiries or feedback.</p>
              <Link to="/contact" className={styles.button}>Read More</Link>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/images/blog.jpg" alt="Blog" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Blog</h3>
              <p className={styles.cardDescription}>Check out our latest blog posts for coffee tips and news.</p>
              <Link to="/blog" className={styles.button}>Read More</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
