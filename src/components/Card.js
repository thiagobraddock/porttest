import React from 'react';
import styles from './Card.module.css';
import Image from './Image';

function Card({ data: { module, id, image, technologies } }) {
  return (
    <div className={styles.wrapper}>
      <figure className={styles.image}>
        <Image src={image} alt={module} />
      </figure>
      <div className={styles.details}>
        {technologies.map((item) => (
          <span key={item}>{item}</span>
        ))}
        <h2>{module}</h2>
      </div>
    </div>
  );
}

export default Card;
