import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../utils/GlobalContext';
import { Link } from 'react-router-dom';
import { getHeroes, searchHero } from '../../services/api';

import { ReactComponent as Search } from '../../assets/u_search.svg';
import { ReactComponent as ArrowLeft } from '../../assets/fi_arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/fi_arrow-right.svg';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import HeroCard from '../../components/HeroCard';
import HeroCardLoading from '../../components/Loading/HeroCardLoading';

import styles from './styles.module.scss';

import HeroesData from './heroes.json';

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
  setHeroes(HeroesData);

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

  function handleClean() {
    event.preventDefault();
    setSearchField('');
  }

  function handleForwardPagination() {
    setLoading(true);
    if (heroesOffset === 0) {
      setHeroesOffset(5);
    } else {
      setHeroesOffset((value) => value + 5);
    }
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

  function handleBackwardPagination() {
    setLoading(true);
    setHeroesOffset((value) => value - 5);
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

  // useEffect(() => {
  //   setLoading(true);
  //   getHeroes(heroesOffset, (error, data) => {
  //     if (error) {
  //       setLoading(false);
  //       return console.log(error);
  //     }
  //     if (data) {
  //       setLoading(false);
  //       return setHeroes(data);
  //     }
  //   });
  //   return setHeroesOffset(heroesOffset);
  // }, []); //eslint-disable-line

  return (
    <>
      <PageTitle title="Marvel Heroes" />
      <Header />
      <div className={styles.wrapper}>
        <section className={styles.title}>
          <h1>Explore HQs com seus personagens preferidos</h1>
        </section>
        <form className={styles.heroSearch}>
          <div className={styles.iconWrapper}>
            <input
              type="text"
              value={searchField}
              onChange={({ target }) => setSearchField(target.value)}
              placeholder="Buscar personagem"
            />
            <Search />
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={handleClean}>Limpar</button>
            <button onClick={handleSubmit}>Buscar</button>
          </div>
        </form>
        <div className={styles.cardContainer}>
          {loading ? (
            <HeroCardLoading />
          ) : (
            heroes &&
            heroes.map((hero) => (
              <Link
                to={{
                  pathname: `/details/${hero.id}`,
                  state: { ...hero }
                }}
                key={hero.id}
              >
                <HeroCard
                  thumb={hero.thumbnail.path}
                  name={hero.name}
                />
              </Link>
            ))
          )}
        </div>
        <div className={styles.pagination}>
          <button
            onClick={handleBackwardPagination}
            disabled={heroesOffset < 5}
          >
            <ArrowLeft />
          </button>
          <button onClick={handleForwardPagination}>
            <ArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Initial;
