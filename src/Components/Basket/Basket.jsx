import React, {useEffect, useState, useCallback} from 'react'
import axios from "axios";
import Style from "../../Style/BasketStyle/Basket.module.css"

import CardBasket from "./CardBasket";
import { useContext } from 'react';
import Total from "./Total";
import { UserContext } from '../../Context/UserContext';
export default function Basket() {

  const [products, setProducts] = useState([]);
  const [currType, setCurrType] = useState("All Menu");
  const [productsApi, setProductsApi] = useState([]);
  const [cart, setCart] = useState([])
  const loggedInUserId = useContext(UserContext).loggedInUser;

  
  useEffect(() => {
    getProductsCart();
  }, []);
  
  const getProductsCart = useCallback(() => {
    axios.get(`http://localhost:3466/Users/${loggedInUserId}`).then((response) => {
      setCart(response.data.cart);
      getProducts();
    })
	}, [cart])

  const getProducts = () => {
    
    axios.get('http://localhost:3477/Products').then((response) => {
      setProductsApi(response.data);
    })
	}

  useEffect(() => {
    getProductsInCart();
  }, [productsApi]);

  const getProductsInCart = () => {
    let temp = [];
    for(let i = 0; i < productsApi.length; i++){
      for(let j = 0; j < cart.length; j++){
        if(productsApi[i].id === cart[j].productId){
          const customizedProduct = {
            id: productsApi[i].id,
            name: productsApi[i].name,
            price: productsApi[i].price,
            chosenQuantity: cart[j].chosenQuantity,
            chosenExtras: cart[j].chosenExtras,
            imgSrc: productsApi[i].imgSrc,
          }
          temp.push(customizedProduct);
        }
      }
    }
    setProducts(temp);
  };

  return (
    <div className={Style.outer}>
        {
          products.length?
          <div className={Style.container}>
              <CardBasket products={products}/>
              <Total products={products}/>
            </div>
          :
          <div className={Style.container2}>
            <img src="empty.svg" alt="empty basket"/>
            <h3>Hey, your basket is empty!</h3>
            <p>Go on, stock up and order your faves.</p>
          </div>
        }
    </div>
  )
}