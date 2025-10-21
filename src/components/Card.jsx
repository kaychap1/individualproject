import React from 'react';
import styles from './Card.module.css';

const Card = ({ image,  image2,image3, image4, title, description, children }) => {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.cardImage} />}
      {image2 && <img src={image2} alt={title} className={styles.cardImage} />}
      {image3 && <img src={image3} alt={title} className={styles.cardImage} />}
      {image4 && <img src={image4} alt={title} className={styles.cardImage} />}
      <div className={styles.cardContent}>
        {title && <h3 className={styles.cardTitle}>{title}</h3>}
        {description && <p className={styles.cardDescription}>{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;
