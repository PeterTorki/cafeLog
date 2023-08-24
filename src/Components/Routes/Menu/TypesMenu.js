import React, { useRef } from "react";
import styles from "../../StylesRoutes/StylesMenu/TypesMenu.module.css"
import menu from "../../imgsComponent/clinking-beer-mugs_1f37b.png"
import coffe from "../../imgsComponent/hot-beverage_2615.png"
import booba from "../../imgsComponent/bubble-tea_1f9cb.png"
import cake from "../../imgsComponent/shortcake_1f370.png"
import smoo from "../../imgsComponent/cup-with-straw_1f964.png"
import bake from "../../imgsComponent/bagel_1f96f.png"

const TypesMenu = ({ typeSetState }) => {

  
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView(); 

  return (
    <div className={styles.sticky}>
      <div className={styles.typesDiv} ref={myRef}>
        <button
          className={styles.typeBox}
          onClick={() => {
            executeScroll()
            typeSetState("All Menu")
          }}
        >
          <img
            src={menu}
            alt="AllMenu"
            width={"30px"}
          />
          <h3 className={styles.h3type}>All
          menu</h3>
        </button>
        <button className={styles.typeBox} onClick={() => {
          executeScroll()
          typeSetState("Coffee")
        }}>
          <img
            src={coffe}
            alt="AllMenu"
            width={"30px"}
          />
        <h3 className={styles.h3type}>Coffee</h3>
        </button>
        <button
          className={styles.typeBox}
          onClick={() => {
            executeScroll()
            typeSetState("Dessert"
          )}}
        >
          <img
            src={cake}
            alt="AllMenu"
            width={"30px"}
          />
          <h3 className={styles.h3type}>Dessert</h3>
        </button>
        <button
          className={styles.typeBox}
          onClick={() => {
            executeScroll()
            typeSetState("Drinks"
          )}}
        >
          <img
            src={smoo}
            alt="AllMenu"
            width={"30px"}
          />
          <h3 className={styles.h3type}>Drinks</h3>
        </button>
        <button
          className={styles.typeBox}
          onClick={() => {
            executeScroll()
            typeSetState("Bakery"
          )}}
        >
          <img
            src={bake}
            alt="AllMenu"
            width={"30px"}
          />
        <h3 className={styles.h3type}>Bakery</h3>
        </button>

        <button className={styles.typeBox} onClick={() => {
          executeScroll()
          typeSetState("Bobaan")
        }}>
          <img
            src={booba}
            alt="AllMenu"
            width={"30px"}
          />
        <h3 className={styles.h3type}>Bobaan</h3>
        </button>
      </div>
    </div>

  );
};

export default TypesMenu;
