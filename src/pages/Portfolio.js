import React from 'react';
import Card from '../components/Card';
import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';
import styles from './Portfolio.module.css';
function Portfolio(props) {
  const { isLoading, data } = useFetch(
    'https://inss-project.vercel.app/api/projects'
  );

  if (isLoading) return <Loading />;

  console.log(data);
  return (
    <>
      <h1>Now, the good stuff. My Work</h1>
      <div className={styles.project__container}>
        {data &&
          data.projects.map((projectData) => <Card data={projectData} />)}

        {/* <div className={styles.project__details}>
          <h1>Titulo</h1>
          <Image
            src="https://static.skillshare.com/cdn-cgi/image/quality=85,width=1242,height=839,format=auto/uploads/project/413091/cover_1242_67f3783bd38ec45183343cdd6e22afbd.png"
            alt="150 img"
          />
        </div> */}
      </div>
    </>
  );
}

export default Portfolio;
