import React from 'react';
import styles from './Loading.module.css';
function Loading() {
  // const [step, setStep] = useState(0);
  // useEffect(() => {
  //   function updateStep() {
  //     setStep((step) => {
  //       if (step < 2) return step + 1;
  //       else return 0;
  //     });
  //   }
  //   const intervalId = setInterval(updateStep, 500);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  // function displayStep(i) {
  //   return {
  //     display: step === i ? 'block' : 'none',
  //   };
  // }
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
