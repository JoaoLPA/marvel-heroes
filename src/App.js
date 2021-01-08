import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { getChars, searchHero } from './services/api';
const App = () => {
  const [searchField, setSearchField] = useState('');
  const [heroesOffset, setHeroesOffset] = useState(0);
  const [heroes, setHeroes] = useState(null);

  function handleSubmit() {
    event.preventDefault();
    searchHero(searchField, (error, data) => {
      if (error) {
        console.log(error);
      }
      if (data) {
        setHeroes(data);
      }
    });
  }

  function nextHeroes() {
    setHeroesOffset(heroesOffset + 10);
    getChars(heroesOffset, (error, data) => {
      if (error) {
        return console.log(error);
      }
      if (data) {
        return setHeroes(data);
      }
    });
  }

  useEffect(() => {
    getChars(undefined, (error, data) => {
      if (error) {
        return console.log(error);
      }
      if (data) {
        return setHeroes(data);
      }
    });
  }, []);

  return (
    <>
      <h1>Marvel Heroes</h1>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      {/* <section>
        <form>
          <input
            type="text"
            placeholder="Pesquisar herói"
            value={searchField}
            onChange={({ target }) => setSearchField(target.value)}
          />
          <button onClick={handleSubmit}>Pesquisar</button>
        </form>
      </section>
      {heroes && (
        <section>
          <ul>
            {heroes.map((hero) => (
              <li key={hero.id}>{hero.name}</li>
            ))}
          </ul>
        </section>
      )}
      <button onClick={nextHeroes}>Mais</button> */}
    </>
  );
};

export default App;
