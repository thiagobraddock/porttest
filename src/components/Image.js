import React from 'react';
import { useState } from 'react';
import styles from './Image.module.css';
function Image({ alt, src, ...props }) {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setTimeout(() => {
      setSkeleton(false);
      target.style.opacity = 1;
    }, 1000);
  }
  return (
    <div className={styles.container}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} src={src} alt={alt} {...props} />
    </div>
  );
}

export default Image;
