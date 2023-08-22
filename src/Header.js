import React from 'react';
import styles from './Style/Header.module.css';
import logo from './Components/Brown_Illustrasi_Coffee_Cafe_Logo__1_-removebg-preview.png';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Header}>
        <img src={logo} alt="ChillCup" className={styles.logo} />
        <h1>Welcome to ChillCup</h1>
        <p>Where Every Sip and Bite Tells a Story</p>
      </div>
    </div>
  );
};

export default Header;
