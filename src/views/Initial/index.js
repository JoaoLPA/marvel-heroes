import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../utils/GlobalContext';
import { Link } from 'react-router-dom';
import { getHeroes, searchHero } from '../../services/api';

import { ReactComponent as Logo } from '../../assets/MarvelTransparent.svg';
import { ReactComponent as Search } from '../../assets/u_search.svg';
import { ReactComponent as ArrowLeft } from '../../assets/fi_arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/fi_arrow-right.svg';
import PageTitle from '../../components/PageTitle';
import HeroCard from '../../components/HeroCard';

import styles from './styles.module.scss';
import mockData from './mockData.json';

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

  function handleClean() {
    event.preventDefault();
    setSearchField('');
  }

  function handleForwardPagination() {
    setHeroes(undefined);
    setLoading(true);
    setHeroesOffset((value) => value + 5);
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
    setHeroes(undefined);
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

  useEffect(() => {
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
    // setHeroes(mockData);
  }, []); //eslint-disable-line

  return (
    <>
      <PageTitle title="Marvel Heroes" />
      <header>
        <Logo />
      </header>
      <div className={styles.wrapper}>
        <section className={styles.title}>
          <h1>Explore HQs com seus personagens preferidos</h1>
        </section>
        <form className={styles.heroSearch}>
          <div className={styles.iconWrapper}>
            {/* <Search /> */}
            <input
              type="text"
              value={searchField}
              onChange={({ target }) => setSearchField(target.value)}
              placeholder="Buscar personagem"
            />
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={handleClean}>Limpar</button>
            <button onClick={handleSubmit}>Buscar</button>
          </div>
        </form>
        <div className={styles.cardContainer}>
          {loading ? (
            <h3>carregando</h3>
          ) : (
            heroes &&
            heroes.map((hero) => (
              <Link to="/detail" key={hero.id}>
                <HeroCard
                  key={hero.id}
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
