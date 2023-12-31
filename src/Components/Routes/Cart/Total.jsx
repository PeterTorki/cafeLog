import React from 'react'
import Style from '../../StylesRoutes/StylesBasket/Total.module.css'
import { ShopContext } from '../../../Context/ShopContext';
import { useContext } from 'react';

export default function Total({ payToggler }) {

  const { cartItems, getTotalCartPrice } = useContext(ShopContext);

  let products = cartItems;

  return (
    <div className={Style.container}>
        <div className={Style.total}>
          <h2>Basket Summary</h2>
          <div className={Style.Elements}>
            {
              products.forEach((p)=>{
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
        <div className={Style.checkout}>
          <button onClick={() => payToggler()}>Checkout</button>
        </div>
    </div>
  )
}
