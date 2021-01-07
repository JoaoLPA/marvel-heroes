import React, { useState, useEffect } from 'react';
import md5 from 'md5';

const App = () => {
  const [heroes, setHeroes] = useState(null);
  const timeStamp = new Date().getTime();
  const hash = md5(
    timeStamp +
      process.env.REACT_APP_PRIVATE_KEY +
      process.env.REACT_APP_PUBLIC_KEY
  );
  const charUrl = `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}&limit=10`;

  const getChars = async () => {
    try {
      const api = await fetch(charUrl);
      const response = await api.json();
      return setHeroes(response.data.results);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => getChars(), []);
  return (
    <div>
      <h1>Marvel Heroes</h1>
      {heroes && (
        <section>
          <ul>
            {heroes.map((hero) => (
              <li key={hero.id}>{hero.name}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default App;
