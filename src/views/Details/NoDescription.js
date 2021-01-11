import React from 'react';
import { ReactComponent as Sad } from '../../assets/u_sad.svg';
import styles from './styles.module.scss';

const NoDescription = () => {
  return (
    <div className={styles.noDescriptionContainer}>
      <Sad />
      <h3>Sem descrição para esse personagem</h3>
    </div>
  );
};

export default NoDescription;
