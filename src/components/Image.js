import React from 'react';
import { useState } from 'react';
import styles from './Image.module.css';
function Image({ src, alt, ...props }) {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={styles.container}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img src={src} alt={alt} {...props} onLoad={handleLoad} />
    </div>
  );
}

export default Image;
