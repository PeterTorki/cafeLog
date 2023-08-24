import React, { useState, useContext } from "react";
import ReactLoading from 'react-loading';
import Card from "./Card";
import Header from './Header'
import TypesMenu from "./TypesMenu";
import styles from '../../StylesSidebar/StylesMenu/Menu.module.css'
import { UserContext } from "../../../Context/UserContext";
import { ProductsContext } from "../../../Context/ProductsContext";

const Menu = () => {

  const [currType, setCurrType] = useState("All Menu");
  const loggedInUserId = useContext(UserContext).loggedInUser;
  
  const {products} = useContext(ProductsContext);

  const handleCurrTypeState = (type) => {
    setCurrType(type);
  };

  const currentElements = products.filter(p => {
    if (currType === "All Menu") return p;
    if (currType === p.type) return p;
    return null;
  });

  
  
  const divDisplay = currentElements.map((p) => {
    return (
      <Card product={p} key={p.id} loggedInUserId={loggedInUserId}/>
    )
  });
  

  
  return (
    <div className={styles.mainMenu}>
    
    {
      
      products.length === 0 ?
      <div>
        <ReactLoading type='spin' color='#E8BA25' height={'100%'} width={'100%'} />
        <h1>Loading...</h1>
      </div>
      :
      <div>
        <Header />
        <TypesMenu typeSetState={handleCurrTypeState} />
        <div className={styles.menuContainer}>
          {divDisplay}
        </div>
      </div>
    }
    </div>
  );
};

export default Menu