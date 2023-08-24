import React, { useContext } from 'react';
import Style from '../../StylesRoutes/StylesBasket/Card.module.css'
import { ShopContext } from '../../../Context/ShopContext'

export default function Card({ p }) {

    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)

    const productCart = cartItems.find(c => c.productId === p.id).chosenExtras.filter(e => e.isActive)

    return (
        <div className={Style.container}>
          <div key={p.id} className={Style.Cards}>
            <div className={Style.LeftSide}>
              <div className={Style.cardimg}>
                <img src={p.imgSrc} alt={p.name} width="80" height="80" />
              </div>
              <div className={Style.Content}>
                <div className={Style.Name}>{p.name}</div>
                {
                    productCart.length > 0 && 
                    <div className={Style.Extras}>
                        Extra :
                        {productCart.map((i) => {
                        return <span key={i.id}> {i.name} ,</span>;
                        })}
                    </div>
                }
                <div className={Style.Price}>EGP {p.price}</div>
              </div>
            </div>
            <div className={Style.Counter}>
            {p.chosenQuantity}
            </div>
          </div>
        </div>
      );
}
