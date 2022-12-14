import React from 'react';
import styles from './Loading.module.css';
function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        <svg id="triangle" width="100px" height="100px" viewBox="-3 -4 39 39">
          <polygon
            fill="#222222"
            stroke="#ffffff"
            strokeWidth="1"
            points="16,0 32,32 0,32"
          ></polygon>
        </svg>
      </div>
    </div>
  );
}

export default Loading;
