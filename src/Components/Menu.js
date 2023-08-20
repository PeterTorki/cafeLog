import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import TypesMenu from "./TypesMenu";
import styles from "../Style/Menu.module.css";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [currType, setCurrType] = useState("All Menu");

  const getProducts = useCallback(() => {
    axios
      .get("http://localhost:3477/Products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => console.log(e));
  }, [products]);

  const handleCurrTypeState = (type) => {
    setCurrType(type);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const currentElemetns = products.filter((p) => {
    if (currType === "All Menu") return p;
    if (currType === p.type) return p;
  });
  const divDisplay = currentElemetns.map((p) => {
    return <div key={p.id}></div>;
  });

  // console.log(currentElemetns);
  const p = products[0];
  console.log(p);
  console.log(products);
  return (
    <div>
      <TypesMenu typeSetState={handleCurrTypeState} />
      <div>
        <div className={styles.card}>
          <div className={styles.info}>
            <img src="" />
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p>{p.description}</p>
              <h4>{p.price}$</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
