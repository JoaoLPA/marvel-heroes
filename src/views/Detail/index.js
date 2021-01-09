import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getComics } from '../../services/api';

import PageTitle from '../../components/PageTitle';
import Mock from './mockData.json';

const Detail = () => {
  const [heroInfo, setHeroInfo] = useState(Mock.results[0]);
  const [comics] = useState([...heroInfo.comics.items]);
  const [comicsInfo, setComicsInfo] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    const sliced = comics.slice(0, 2);
    const list = sliced.map((url) => url.resourceURI);
    getComics(list, (error, data) => {
      if (data) {
        setComicsInfo(data.map((hq) => hq.data.results[0]));
      } else {
        console.log(error);
      }
    });
  }, []); //eslint-disable-line

  return (
    <>
      <PageTitle title={`Marvel - ${heroInfo.name}`} />
      <h1>{heroInfo.name}</h1>
      <img
        src={`${heroInfo.thumbnail.path}/portrait_uncanny.jpg`}
        alt={`${heroInfo.name} portrait`}
      />
      <button onClick={history.goBack}>Voltar</button>
      <section>
        {heroInfo.description.length > 1 ? (
          <p>{heroInfo.description}</p>
        ) : (
          <p>Sem descrição disponível</p>
        )}
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
    </>
  );
};

export default Detail;
