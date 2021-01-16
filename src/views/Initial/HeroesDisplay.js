import React from 'react';
import { Link } from 'react-router-dom';

import HeroCard from '../../components/HeroCard';
import HeroCardLoading from '../../components/Loading/HeroCardLoading';
import { ReactComponent as ArrowLeft } from '../../assets/fi_arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/fi_arrow-right.svg';

import styles from './styles.module.scss';

const HeroesDisplay = ({ loading, heroesDisplay, page, setPage }) => {
  return (
    <>
      <div className={styles.cardContainer}>
        {loading ? (
          <HeroCardLoading />
        ) : (
          heroesDisplay &&
          heroesDisplay.map((hero) => (
            <Link
              to={{
                pathname: `/details/${hero.id}`,
                state: { ...hero }
              }}
              key={hero.id}
            >
              <HeroCard thumb={hero.thumbnail.path} name={hero.name} />
            </Link>
          ))
        )}
      </div>
      <div className={styles.pagination}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          <ArrowLeft />
        </button>
        <button onClick={() => setPage(page + 1)}>
          <ArrowRight />
        </button>
      </div>
    </>
  );
};

export default HeroesDisplay;
