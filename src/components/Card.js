import React from 'react';
import styles from './Card.module.css';
import Image from './Image';

function Card({ data: { id, module, image } }) {
  return (
    <div className={styles.project__details} key={id}>
      <figure className={styles.img__project}>
        <Image src={image} alt={module} />
      </figure>
      <div className={styles.title}>
        <h1>{module}</h1>
        <div className={styles.view__details}>
          View Details <span>＞</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
