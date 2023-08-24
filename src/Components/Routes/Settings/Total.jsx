import React, {useEffect, useState, useCallback} from 'react'
import Style from '../../StylesRoutes/StylesBasket/Total.module.css';
import { useContext } from 'react';
import { ProductsContext } from '../../../Context/ProductsContext';
export default function Total({ cartItems }) {

  const {products} = useContext(ProductsContext);
  const getElemPrice = (productId)=>{
		return products.find(p => p.id === productId).price;
	}
  
  const getTotalCartPrice = () => {
		let totalPrice = 0;
		cartItems.forEach(c => {
			totalPrice += parseInt(getElemPrice(c.productId)) * c.chosenQuantity;
			c.chosenExtras.forEach(e => {
				totalPrice += parseInt(e.price) * (e.isActive?1:0)
			})
		})
		return totalPrice;
	}

  let productsOfCart = cartItems;
  let res = 0;
  return (
    <div className={Style.container2}>
        <div className={Style.total}>
          <h2>Basket Summary</h2>
          <div className={Style.Elements}>
            {
              productsOfCart.forEach((p)=>{
                return(
                  <span>{getTotalCartPrice()}</span>
                );
              })
              
            }
            <div className={Style.items}>
              <p>Subtotal</p>
              <p>EGP {parseInt(getTotalCartPrice())}
              </p>
                
            </div>
            <div className={Style.items}>
              <p>Survice Fee</p>
              <p>EGP 5</p>
            </div>

            <div className={Style.items}>
              <p>Delivery Fee</p>
              <p>EGP 9.99</p>
            </div>

          </div>
          <div className={Style.Amount}>
              <p>Total Amount</p>
              <p>EGP {parseInt(getTotalCartPrice())+9.9+5}</p>
          </div>
        </div>
    </div>
  )
}
