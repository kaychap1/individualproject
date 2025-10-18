import React from 'react';
import styles from './Home.module.css';
import Wrapper from './Wrapper';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Wrapper>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1>Ghost Coffee Roaster was built on a simple idea</h1>
          <h3>
            Coffee should be an experience, not just a drink. From the first sip
            to the last, we want every cup to leave a lasting impression So good,
            it'll put the rest of your coffee to rest.
          </h3>
          <Link to="#coffee">
            <button>Meet our Coffee</button>
          </Link>
        </div>

        <div id="coffee" className={styles.ourcoffee}>
          <div className={styles.ourcoffee_text}>
            <h1>Our Coffee</h1>
            <h3>
              We specialize in sourcing exceptional beans from around the world,
              roasting them with precision, and brewing them to highlight every
              unique flavor note. All of our coffee are single origin, specialty
              coffees. Whether you love bright and fruity Ethiopian profiles or bold
              and smoky Sumatras, we have a roast that speaks to you.<br/>  

              Ghost Coffee Roaster is a place where quality meets consistency. 
              We take pride in our brewing standards, our carefully developed SOPs, 
              and the fact that every cup we hand over meets the same high bar.
            </h3>
            <Link to="/about">
              <button>About Us</button>
            </Link>
          </div>
          <div className={styles.ourcoffee_images}>
            <img src="src/images/ourcoffee1.jpg" alt="coffee"/>
            <img src="src/images/ourcoffee2.jpg" alt="coffee"/>
            <img src="src/images/ourcoffee3.jpg" alt="coffee"/>
            <img src="src/images/ourcoffee4.jpg" alt="coffee"/>
          </div>
        </div>


        <div id="food" className={styles.ourfood}>
        <div className={styles.ourcoffee_images}>
            <img src="src/images/ourfood1.jpg" alt="food"/>
            <img src="src/images/ourfood2.jpg" alt="food"/>
            <img src="src/images/ourfood3.jpg" alt="food"/>
            <img src="src/images/ourfood4.jpg" alt="food"/>
          </div>
          <div className={styles.ourfood_text}>
            <h1>Our Food</h1>

            <h3>

              Our menu balances the classics with creativity. You'll find
               perfect espresso shots and lattes alongside ghostly signature drinks
                and seasonal specials — all crafted with care and a bit of
                 playfulness.<br/> <br/>

              Beyond coffee, Ghost offers house-made pastries, sandwiches, and snacks
               that pair perfectly with our brews. From avocado toast to our hot
                honey chicken and waffle, our food is as memorable as our drinks.
            </h3>
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </div>
          
        </div>
        
      </div>
    </Wrapper>
  );
};

export default Home;
