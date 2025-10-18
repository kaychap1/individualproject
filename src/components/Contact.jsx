import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    
      <div className={styles.container}>
        <h1>Contact Us</h1>
      
          <div className={styles.nameInputs}>
            <div>
              <p>
                First Name<span>*</span>
              </p>
              <input type="text" placeholder="First Name" />
            </div>
            <div>
              <p>
                Last Name<span>*</span>
              </p>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <p>
            Email<span>*</span>
          </p>
          <input type="email" placeholder="Email" />
          <p>Comment or Message</p>
          <textarea placeholder="Comment or Message"></textarea>
          <button>Submit</button>

      </div>
    
  );
};

export default Contact;
