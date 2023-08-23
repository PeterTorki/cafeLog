import React, {useEffect, useState, useCallback} from 'react'
import Style from "../../Style/BasketStyle/Total.module.css";

export default function Total(props) {
  let products=props.products;
  const subTotal = (p,initPrice)=>{
    var cntr = parseInt(initPrice);
      if(p){
          p.forEach((e)=>cntr+=parseInt(e.price));
      }
      return cntr;
  };
  let res = 0;
  return (
    <div className={Style.container}>
        <div className={Style.total}>
          <h2>Basket Summary</h2>
          <div className={Style.Elements}>
            {
              products.forEach((p)=>{
                return(
                  <span>{subTotal(p.chosenExtras,p.price)}</span>
                );
              })
              
            }
            <div className={Style.items}>
              <p>Subtotal</p>
              <p>EGP {
                  products.forEach((p)=>{
                    res+=parseInt(subTotal(p.chosenExtras,p.price)*p.chosenQuantity)
                  })
                }{res}
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
              <p>EGP {res+9.9+5}</p>
          </div>
        </div>
        <div className={Style.checkout}>
          <button>Checkout</button>
        </div>
    </div>
  )
}
