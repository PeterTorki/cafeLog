import React, {useEffect, useState, useCallback} from 'react'
import axios from "axios";
import Style from "../Style/BasketStyle/Basket.module.css"

import CardBasket from "./CardBasket";
import Total from "./Total";

export default function Basket() {

  const [products, setProducts] = useState([]);
  
    const getProducts = useCallback(() => {
		axios.get('http://localhost:3477/Products').then((response) => {
      setProducts(response.data);
    })
	}, [products])


	useEffect(() => {
		getProducts();
	}, []);

  return (
    <div>
        {
          products.length?
            <div className={Style.container}>
              <CardBasket/>
              <Total/>
            </div>
          :<div className={Style.container2}> 
              <img src="empty.svg" alt="empty Basket" />
              <h3>Hey, your basket is empty!</h3>
              <p>Go on, stock up and order your faves.</p>
          </div>
        }
    </div>
  )
}
