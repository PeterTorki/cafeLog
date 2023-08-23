import React, { useContext} from 'react';
import axios from 'axios';
import Style from '../../Style/BasketStyle/Card.module.css';
import { ShopContext } from '../../Context/ShopContext'

export default function Card({ p }) {
	const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)
	const foundItem = cartItems.find((item) => item.productId === p.id)
	console.log(foundItem)
  return (
    <div className={Style.container}>
      <div key={p.id} className={Style.Cards}>
        <div className={Style.LeftSide}>
          <div className={Style.cardimg}>
            <img src={p.imgSrc} alt={p.name} width={80} height={80} />
          </div>
          <div className={Style.Content}>
            <div className={Style.Name}>{p.name}</div>
            <div className={Style.Name}>Quantity{p.chosenQuantity}</div>
            <div className={Style.chosenExtras}>
              Extra :
              {p.chosenExtras.map((i) => {
                return <span key={i.id}> {i.name} ,</span>;
              })}
            </div>
						<div className='countHandler'>
							<button onClick={() => removeFromCart(p.id)}>-</button>
							<input value={foundItem?.chosenQuantity} onChange={(e) => updateCartItemCount(Number(e.target.value), p.id)}/>
							<button onClick={() => addToCart(p.id)}>+</button>
						</div>
          </div>
        </div>
      </div>
    </div>
  );
}
