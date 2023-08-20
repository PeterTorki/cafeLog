import React from "react";
import styles from "../Style/TypesMenu.module.css";
const TypesMenu = ({ typeSetState }) => {
  return (
    <div className={styles.typesDiv}>
      <button
        className={styles.typeBox}
        onClick={() => typeSetState("All Menu")}
      >
        <h3>All Menu</h3>
        <img
          src="./Imgs/Products/menu/icons8-coffee-16.png"
          alt="AllMenu"
          width={"50px"}
        />
      </button>
      <button className={styles.typeBox} onClick={() => typeSetState("Coffee")}>
        <h3>Coffee</h3>
        <img
          src="./Imgs/Products/menu/icons8-coffee-16.png"
          alt="AllMenu"
          width={"50px"}
        />
      </button>
      <button
        className={styles.typeBox}
        onClick={() => typeSetState("Dessert")}
      >
        <h3>Dessert</h3>
        <img
          src="./Imgs/Products/menu/icons8-coffee-16.png"
          alt="AllMenu"
          width={"50px"}
        />
      </button>
      <button
        className={styles.typeBox}
        onClick={() => typeSetState("Smothie")}
      >
        <h3>Smothie</h3>
        <img
          src="./Imgs/Products/menu/icons8-coffee-16.png"
          alt="AllMenu"
          width={"50px"}
        />
      </button>
      <button
        className={styles.typeBox}
        onClick={() => typeSetState("Hot Drink")}
      >
        <h3>Hot Drink</h3>
        <img
          src="./Imgs/Products/menu/icons8-coffee-16.png"
          alt="AllMenu"
          width={"50px"}
        />
      </button>
      <button className={styles.typeBox} onClick={() => typeSetState("Bobaan")}>
        <h3>Bobaan</h3>
        <img
          src="./Imgs/Products/menu/icons8-coffee-16.png"
          alt="AllMenu"
          width={"50px"}
        />
      </button>
    </div>
  );
};

export default TypesMenu;
