import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import TypesMenu from "./TypesMenu";
import Card from "./Card";
import Header from "../Header";
import styles from "../Style/Menu.module.css";
const Menu = () => {
	const [products, setProducts] = useState([]);
  const [currType, setCurrType] = useState("All Menu");

  const getProducts = useCallback(() => {
		axios.get('http://localhost:3477/Products').then((response) => {
      setProducts(response.data);
    })
	}, [products])


	useEffect(() => {
		getProducts();
	}, []);


  const handleCurrTypeState = (type) => {
    setCurrType(type);
  };

  const currentElements = products.filter((p) => {
    if (currType === "All Menu") return p;
    if (currType === p.type) return p;
  });

  if(currentElements.length === 0) return null;
  
  const divDisplay = currentElements.map((p) => {
    return (
      <Card product={p}/>
    )
  });

  if(products.length === 0) return null;
  return (
    <div className={styles.mainMenu}>
      <Header />
      <TypesMenu typeSetState={handleCurrTypeState} />
      <div className={styles.menuContainer}>
        {divDisplay}
      </div>
    </div>
  );
};

export default Menu