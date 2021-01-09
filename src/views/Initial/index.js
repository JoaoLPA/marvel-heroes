import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../utils/GlobalContext';
import { Link } from 'react-router-dom';
import { getHeroes, searchHero } from '../../services/api';

import PageTitle from '../../components/PageTitle';

import mockData from './mockData.json';

const Initial = () => {
  const {
    loading,
    setLoading,
    heroes,
    setHeroes,
    heroesOffset,
    setHeroesOffset
  } = useContext(GlobalContext);
  const [searchField, setSearchField] = useState('');

  function handleSubmit() {
    event.preventDefault();
    setLoading(true);
    searchHero(searchField, (error, data) => {
      if (error) {
        setLoading(false);
        console.log(error);
      }
      if (data) {
        setLoading(false);
        setHeroes(data);
      }
    });
  }

  function handlePagination(value) {
    if (value === 'forward') {
      setHeroesOffset((offset) => offset + 10);
    } else {
      setHeroesOffset((offset) => offset - 10);
    }
    setLoading(true);
    getHeroes(heroesOffset, (error, data) => {
      if (error) {
        setLoading(false);
        return console.log(error);
      }
      if (data) {
        setLoading(false);
        return setHeroes(data);
      }
    });
  }

  useEffect(() => {
    // setLoading(true);
    // getHeroes(heroesOffset, (error, data) => {
    //   if (error) {
    //     setLoading(false);
    //     return console.log(error);
    //   }
    //   if (data) {
    //     setLoading(false);
    //     return setHeroes(data);
    //   }
    // });
    setHeroes(mockData);
  }, []); //eslint-disable-line

  return (
    <>
      <PageTitle title="Marvel Heroes" />
      <header>
        <h1>Explore HQs com seus personagens preferidos</h1>
      </header>
      <form>
        <input
          type="text"
          value={searchField}
          onChange={({ target }) => setSearchField(target.value)}
          placeholder="Buscar personagem"
        />
        {searchField.length !== 0 ? (
          <button onClick={handleSubmit}>Buscar</button>
        ) : (
          ''
        )}
      </form>
      {loading ? (
        <h3>carregando</h3>
      ) : (
        <p>a</p>
        // heroes && (
        //   <section>
        //     {heroes.map((hero) => (
        //       <div key={hero.id}>
        //         <Link to="/detail">
        //           <img
        //             src={`${hero.thumbnail.path}/portrait_uncanny.jpg`}
        //             alt="Hero portrait"
        //           />
        //           <h3>{hero.name}</h3>
        //         </Link>
        //       </div>
        //     ))}
        //   </section>
        // )
      )}
      <button
        onClick={({ target }) => handlePagination(target.value)}
        disabled={heroesOffset < 10}
        value="backward"
      >
        menos
      </button>
      <button
        onClick={({ target }) => handlePagination(target.value)}
        value="forward"
      >
        Mais
      </button>
    </>
  );
};

export default Initial;
