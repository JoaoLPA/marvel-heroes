import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getComics } from '../../services/api';

import PageTitle from '../../components/PageTitle';
import Header from '../../components/Header';
import Mock from './mockData.json';
import Comics from './comicsInfoMock.json';
import { ReactComponent as ChevronLeft } from '../../assets/fi_chevron-left.svg';
import styles from './styles.module.scss';

const Detail = () => {
  const [heroInfo, setHeroInfo] = useState(Mock.results[0]);
  const [comics] = useState([...heroInfo.comics.items]);
  // const [comicsInfo, setComicsInfo] = useState(undefined);
  const [comicsInfo, setComicsInfo] = useState([...Comics.results]);
  const history = useHistory();

  // useEffect(() => {
  //   const sliced = comics.slice(0, 2);
  //   const list = sliced.map((url) => url.resourceURI);
  //   getComics(list, (error, data) => {
  //     if (data) {
  //       setComicsInfo(data.map((hq) => hq.data.results[0]));
  //     } else {
  //       console.log(error);
  //     }
  //   });
  // }, []); //eslint-disable-line

  return (
    <>
      <PageTitle title={`Marvel - ${heroInfo.name}`} />
      <Header color="#FFF" />
      <div className={styles.detailsBackground}>
        <section className={styles.description}>
          <button
            className={styles.goBackButton}
            onClick={history.goBack}
          >
            <ChevronLeft />
          </button>
          <figure
            className={styles.heroPortrait}
            style={{
              backgroundImage: `url(${heroInfo.thumbnail.path}/portrait_uncanny.jpg)`
            }}
          >
            <img
              src={`${heroInfo.thumbnail.path}/portrait_uncanny.jpg`}
              alt={`${heroInfo.name} portrait`}
            />
          </figure>
          <section>
            <div className={styles.heroName}>
              <h1>{heroInfo.name}</h1>
            </div>
            {heroInfo.description.length > 1 ? (
              <p>{heroInfo.description}</p>
            ) : (
              <p>Sem descrição disponível</p>
            )}
          </section>
        </section>
        <section>
          <h2>
            HQs que <strong>{heroInfo.name}</strong> aparece
          </h2>
          {comicsInfo &&
            comicsInfo.map((comic, index) => (
              <div key={index}>
                <img
                  src={`${comic.thumbnail.path}/portrait_uncanny.jpg`}
                  alt="comic cover"
                />
                <h3>{comic.title}</h3>
              </div>
            ))}
        </section>
      </div>
    </>
  );
};

export default Detail;
