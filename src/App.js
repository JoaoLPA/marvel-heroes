import React, { useState, useEffect } from 'react';
import md5 from 'md5';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [heroes, setHeroes] = useState(null);
  const timeStamp = new Date().getTime();
  const hash = md5(
    timeStamp +
      process.env.REACT_APP_PRIVATE_KEY +
      process.env.REACT_APP_PUBLIC_KEY
  );
  const charsUrl = `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}&limit=10&offset=55`;
  const singleCharUrl = `https://gateway.marvel.com/v1/public/characters?name=${searchField}&ts=${timeStamp}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`;

  const getChars = async () => {
    try {
      const api = await fetch(charsUrl);
      const response = await api.json();
      return setHeroes(response.data.results);
    } catch (error) {
      return error;
    }
  };

  const searchHero = async (event) => {
    event.preventDefault();
    try {
      const api = await fetch(singleCharUrl);
      const response = await api.json();
      return setHeroes(response.data.results);
    } catch (error) {
      return error;
    }
  };

  // useEffect(() => getChars(), []); //eslint-disable-line
  return (
    <div>
      <h1>Marvel Heroes</h1>
      <section>
        <form>
          <input
            type="text"
            placeholder="Pesquisar herói"
            value={searchField}
            onChange={({ target }) => setSearchField(target.value)}
          />
          <button onClick={searchHero}>Pesquisar</button>
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
      <img
        src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/standard_xlarge.jpg"
        alt="hero thumb"
      />
    </div>
  );
};

export default App;
