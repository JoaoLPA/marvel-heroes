import React from 'react';

import styles from './styles.module.scss';

const HeroCard = () => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage:
          'linear-gradient(to top, rgba(0, 0, 0, 0.3) 10%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)) , url(http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860/portrait_uncanny.jpg)'
      }}
    >
      <div className={styles.heroName}>
        <h3>Nome</h3>
      </div>
    </div>
  );
};

export default HeroCard;
