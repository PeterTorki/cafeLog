import React from 'react';
import styles from '../../StylesRoutes/StylesMenu/Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bgimg}></div>
      <div className={styles.Header}>
        <img src="main.png" alt="Coffe Cup" />
        <h1>We Offers a Good Coffe</h1>
        <p>Good Ideas Start With Brainstorming. Great IDeas Start With Coffe.</p>
      </div>
    </div>
  );
};

export default Header;
