import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../utils/GlobalContext';
import { getHeroes, searchHero } from '../../services/api';

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

  function handlePagination() {
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
    setLoading(true);
    getHeroes(undefined, (error, data) => {
      if (error) {
        setLoading(false);
        return console.log(error);
      }
      if (data) {
        setLoading(false);
        return setHeroes(data);
      }
    });
  }, []); //eslint-disable-line

  return (
    <>
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
        heroes && (
          <section>
            <ul>
              {heroes.map((hero) => (
                <li key={hero.id}>{hero.name}</li>
              ))}
            </ul>
          </section>
        )
      )}
      <button onClick={handlePagination} disabled={heroesOffset <= 10}>
        menos
      </button>
      <button onClick={handlePagination}>Mais</button>
    </>
  );
};

export default Initial;
