import React from 'react';

import styles from './styles.module.scss';

const HeroCardLoading = () => {
  return (
    <>
      <div className={styles.heroCardLoading}>
        <div className={styles.loading}></div>
      </div>
      <div className={styles.heroCardLoading}>
        <div className={styles.loading}></div>
      </div>
      <div className={styles.heroCardLoading}>
        <div className={styles.loading}></div>
      </div>
      <div className={styles.heroCardLoading}>
        <div className={styles.loading}></div>
      </div>
      <div className={styles.heroCardLoading}>
        <div className={styles.loading}></div>
      </div>
    </>
  );
};

export default HeroCardLoading;
