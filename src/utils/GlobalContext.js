import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [heroesOffset, setHeroesOffset] = useState(0);
  const [heroes, setHeroes] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        heroesOffset,
        setHeroesOffset,
        heroes,
        setHeroes,
        loading,
        setLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
