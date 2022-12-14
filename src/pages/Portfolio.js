import React from 'react';
import Card from '../components/Card';
import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';
import styles from './Portfolio.module.css';

function Portfolio(props) {
  console.log(styles);
  const { isLoading, data } = useFetch(
    'https://inss-project.vercel.app/api/projects'
  );

  if (isLoading) return <Loading />;

  console.log(data);
  return (
    <div className={styles.portfolio}>
      <h1>Titulo</h1>
      <div className={styles.container}>
        {data &&
          data.projects.map((projectData) => (
            <Card data={projectData} key={projectData.id} />
          ))}
      </div>
    </div>
  );
}

export default Portfolio;
