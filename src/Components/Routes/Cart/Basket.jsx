import React, {useState} from 'react'
import { ShopContext } from '../../../Context/ShopContext';
import { ProductsContext } from '../../../Context/ProductsContext'
import Style from '../../StylesRoutes/StylesBasket/Basket.module.css'
import CardBasket from "./CardBasket";
import { useContext } from 'react';
import Total from "./Total";
import Payout from './Payout';

export default function Basket() {

  const {products} = useContext(ProductsContext);
	
	const { cartItems } = useContext(ShopContext);
  
	const cartToView = []
  if (cartItems.length) {
    for(let i = 0; i < cartItems.length; i++) {
      if(cartItems[i].chosenQuantity > 0) {
        for(let j = 0; j < products.length; j++) {
          if(cartItems[i].productId === products[j].id) {
            const customizedProduct = {
              id: products[j].id,
              name: products[j].name,
              price: products[j].price,
              chosenQuantity: cartItems[i].chosenQuantity,
              chosenExtras: cartItems[i].chosenExtras,
              imgSrc: products[j].imgSrc,
            };
            cartToView.push(<CardBasket p={customizedProduct} key={customizedProduct.id}/>);
          }
        }
      }
	}
  }

  const payToggler = () => {
    setTogglePayment(!togglePayment);
  }

  const [togglePayment, setTogglePayment] = useState(true);
  return (
    <div>
      {
        togglePayment?  
        <div className={Style.outer}>
          {
            cartItems.length !== 0 && cartItems.some(c => c.chosenQuantity > 0)?
            <div className={Style.container}>
                {
                  cartToView
                }
                <Total payToggler={payToggler}/>
            </div>
            :
            <div className={Style.container2}> 
                <img src="empty.svg" alt="empty Basket" />
                <h3>Hey, your basket is empty!</h3>
                <p>Go on, stock up and order your faves.</p>
            </div>
          }
        </div>
        :
        <Payout setTogglePayment={setTogglePayment}/>
      }
    </div>
  )
}
