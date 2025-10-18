import React from 'react';
import styles from './About.module.css';
import Wrapper from './Wrapper';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Wrapper>
      <div className={styles.container}>
        <h1>About Us</h1>
        <div className={styles.aboutContent}>
          <p>
            Five generations of my family have called this area of Indiana home.
            Ghost is located at 750 W Stadium Ave in West Lafayette, right by
            Ross-Ade Stadium, Ghost Coffee Roaster is more than just a coffee shop.
            It's a gathering place for students, locals, and fans who want the
            highest quality coffee in a welcoming atmosphere. <br/><br/>The “ghost” in our
            name isn't just a theme, it's an attitude. We embrace the mysterious,
            the bold, and the unexpected. Every detail — from our branding to our
            drinks — is designed to leave a memorable mark.
          </p>
          <img src="src/images/aboutus1.jpg" alt="building" />
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.community}>
            <h3>Community</h3>
            <p>
            Ghost Coffee Roaster isn't just about caffeine. It's about community.
              We love being part of the Purdue family, fueling early mornings, 
              game days, study sessions, and late-night conversations with friends.<br/>
              <br/>

            We believe great coffee starts with great people. Our team of skilled
              baristas brings passion, knowledge, and personality to every drink they
              serve, making sure you feel at home the moment you walk in.
            </p>
          </div>
          <div className={styles.mission}>
            <h3>Mission</h3>
            <p>
              We're proud to be a new part of West Lafayette's culture. Whether 
              you're fueling up before class, celebrating after a big game, or simply 
              looking for your new favorite coffee spot, Ghost Coffee Roaster is here 
              to haunt your cravings — in the best way possible.
            </p>
          </div>
        </div>

        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default About;
