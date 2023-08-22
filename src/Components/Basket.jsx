import React, {useEffect, useState, useCallback} from 'react'
import axios from "axios";
import Style from "../Style/BasketStyle/Basket.module.css"

import CardBasket from "./CardBasket";
import { useContext } from 'react';
import Total from "./Total";
import { UserContext } from '../Context/UserContext';
export default function Basket() {


  
  const [products, setProducts] = useState([]);
  const [currType, setCurrType] = useState("All Menu");
  const [productsApi, setProductsApi] = useState([]);
  const [cart, setCart] = useState([])
  const loggedInUserId = useContext(UserContext).loggedInUser;


  const getProductsCart = useCallback(() => {
    axios.get(`http://localhost:3466/Users/${loggedInUserId}`).then((response) => {
      console.log(response.data.cart)
      setCart(response.data.cart);
    })
	}, [])


  const getProducts = useCallback(() => {
    axios.get('http://localhost:3477/Products').then((response) => {
      setProductsApi(response.data);
    })
	}, [cart])


  useEffect(() => {
    getProducts();
    console.log(productsApi)
    let temp = [];
    for(let i = 0; i < productsApi.length; i++){
      for(let j = 0; j < cart.length; j++){
        if(productsApi[i].id === cart[j].productId){
          
          temp.push(productsApi[i]);
        }
      }
    }
    setProducts(temp);
  }, [cart, loggedInUserId]);

  useEffect(() => {
    getProductsCart();
  }, []);

  return (
    <div>
        {
          products.length?
            <div className={Style.container}>
              <CardBasket products={products}/>
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
