import React from 'react'
import Style from '../../StylesRoutes/StylesBasket/Payout.module.css'
import {BsPaypal} from 'react-icons/bs';
import {BsGooglePlay} from 'react-icons/bs';
import {BsApple} from 'react-icons/bs';
import { useContext } from 'react';
import { ShopContext } from '../../../Context/ShopContext';

export default function Payout({ setTogglePayment }) {
  const { deleteCart } = useContext(ShopContext);

  const checkout = () => {
    deleteCart();
  }

  return (
    <div className={Style.main}>
      <div className={Style.main2}>
          <div className={Style.first}>
            <h1 className={Style.heading}>
                CheckOut
            </h1>
          </div>
            <form action="" onSubmit={() => {
                  checkout();
                  setTogglePayment(true);
                }}>
          <div className={Style.secondary}>
            <div className={Style.left}>
                <h1>
                  Personal Details
                </h1>
                <hr />
                <br />
                <div className={Style.row}>
                  <div className={Style.col}>
                      <label htmlFor="">First Name</label>
                      <input type="text" title="email" pattern="[a-z A-Z]*" required/>
                  </div>
                  <div className={Style.col}>
                      <label htmlFor="">Last Name</label>
                      <input type="text" name="" id="" pattern="[a-z A-Z]*" required />
                  </div>
                </div>
                <label htmlFor="">Email</label>
                <input type="email" name="" id=""  required />
                <label htmlFor="">Password</label>
                <input type="password" name="" id=""  required />
                <h1>      
                  Payment Method
                </h1>
                <hr />
                <br />
                <label htmlFor="">WALLET PAYMENT</label>
                <div className={Style.row1}>
                  <div className={`${Style.row} ${Style.cursor}`}>
                      <BsPaypal className={Style.icon1}></BsPaypal>
                      <h3>PayPal</h3>
                  </div>
                  <div className={`${Style.row} ${Style.cursor}`}>
                      <BsApple className={Style.icon2}></BsApple>
                      <h3>
                        Apple Pay
                      </h3>
                  </div>
                  <div className={`${Style.row} ${Style.cursor}`}>
                      <BsGooglePlay className={Style.icon3}></BsGooglePlay>
                      <h3>Google Pay</h3>
                  </div>
                </div>
            </div>
            <div className={Style.right}>
                <h1>
                  Card Details
                </h1>
                <hr />
                <br />
                <label htmlFor="">Name on card</label>
                <input type="text" name="" id="" pattern="[a-z A-Z]*"  required />

                <label htmlFor="">Card number</label>
                <input type="number"  required />
                
                <div className={Style.row}>
                  <div className={Style.col}>
                      <label htmlFor="">Valid through(MM/YY)</label>
                      <input type="month" name="" id=""  required />
                  </div>
                  <div className={Style.col}>
                      <label htmlFor="">CVV (3 Digits)</label>
                      <input type="password" name="" id="" maxlength="3" required />
                  </div>
                </div>
                <button type='submit'>CHECKOUT</button>
            </div>
          </div>
            </form>
      </div>
    </div>
  )
}
