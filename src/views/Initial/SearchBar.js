import React, { useState } from 'react';

import { ReactComponent as Search } from '../../assets/u_search.svg';
import styles from './styles.module.scss';

const SearchBar = ({ handleSubmit, searchField, setSearchField }) => {
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleSubmit(searchField);
    }
  }

  function handleClean() {
    event.preventDefault();
    setSearchField('');
  }

  return (
    <form className={styles.heroSearch}>
      <div className={styles.iconWrapper}>
        <input
          type="text"
          value={searchField}
          onChange={({ target }) => setSearchField(target.value)}
          onKeyPress={(event) => handleKeyPress(event)}
          placeholder="Buscar personagem"
        />
        <Search />
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handleClean} className={styles.cleanButton}>
          Limpar
        </button>
        <button
          onClick={() => handleSubmit(searchField)}
          className={styles.searchButton}
        >
          Buscar
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
