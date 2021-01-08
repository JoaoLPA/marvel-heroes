import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Mock from './mockData.json';

const Detail = () => {
  const [heroInfo, setHeroInfo] = useState(Mock.results[0]);
  const [comics] = useState([...heroInfo.comics.items]);
  const history = useHistory();

  return (
    <>
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
        {comics.map((comic, index) => (
          <p key={index}>
            <span>{comic.resourceURI}</span>
            <span>{comic.name}</span>
          </p>
        ))}
      </section>
    </>
  );
};

export default Detail;
