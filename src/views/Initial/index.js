import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../utils/GlobalContext';
import { Link } from 'react-router-dom';
import { getHeroes, searchHero } from '../../services/api';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import HeroesDisplay from './HeroesDisplay';

import styles from './styles.module.scss';

import heroesMock from './heroesMock.json';
import SearchBar from './SearchBar';

const Initial = () => {
  const {
    loading,
    setLoading,
    heroesOffset,
    heroes,
    setHeroes,
    setSingleHero
  } = useContext(GlobalContext);

  const [heroesDisplay, setHeroesDisplay] = useState([]);
  const [page, setPage] = useState(1);
  const [heroesPerPage] = useState(5);
  const [searchField, setSearchField] = useState('');

  function handleSubmit(hero) {
    event.preventDefault();
    setLoading(true);
    searchHero(hero, (error, data) => {
      setSearchField('');
      if (error) {
        setLoading(false);
        console.log(error);
      }
      if (data) {
        setLoading(false);
        setSingleHero(data);
      }
    });
  }

  useEffect(() => {
    setLoading(true);
    const cachedHeroes = window.localStorage.getItem('cachedHeroes');

    if (cachedHeroes) {
      const parsedCachedHeroes = JSON.parse(cachedHeroes);
      setHeroes(cachedHeroes);
      return setLoading(false);
    }

    getHeroes(heroesOffset, (error, data) => {
      if (error) {
        setLoading(false);
        return console.log(error);
      }
      if (data) {
        window.localStorage.setItem(
          'cachedHeroes',
          JSON.stringify(data)
        );
        setHeroes(data);
        return setLoading(false);
      }
    });
  }, []); //eslint-disable-line

  useEffect(() => {
    setHeroes(heroesMock.results);
  }, []); //eslint-disable-line

  const indexOfLastHero = page * heroesPerPage;
  const indexOfFirstHero = indexOfLastHero - heroesPerPage;
  useEffect(() => {
    if (heroes) {
      setHeroesDisplay(heroes.slice(indexOfFirstHero, indexOfLastHero));
    }
  }, [heroes, page]); //eslint-disable-line

  return (
    <>
      <PageTitle title="Marvel Heroes" />
      <Header />
      <div className={styles.wrapper}>
        <section className={styles.title}>
          <h1>Explore HQs com seus personagens preferidos</h1>
        </section>
        <SearchBar
          handleSubmit={handleSubmit}
          searchField={searchField}
          setSearchField={setSearchField}
        />
        <HeroesDisplay
          loading={loading}
          heroesDisplay={heroesDisplay}
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  );
};

export default Initial;
