import React from 'react';

import styles from './styles.module.scss';

const HeroCard = ({ key, thumb, name }) => {
  return (
    <div
      key={key}
      className={styles.card}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)) , url(${thumb}/portrait_uncanny.jpg)`
      }}
    >
      <div className={styles.heroName}>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default HeroCard;
