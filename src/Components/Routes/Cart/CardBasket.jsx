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
                        <div className={Style.Extras}>
                            Extra :
                            {
                                productCart.map((i) => {
                                    return (
                                        <span key={i.id}> {i.name} ,</span>
                                    )
                                })
                            }
                        </div>
                        <div className={Style.Price}>EGP {p.price}</div>
                    </div>
                </div>
                <div className={Style.Counter}>
                    {
                        parseInt(p.chosenQuantity) === 1 ?
                            <div className={Style.myButton} onClick={() => removeFromCart(p.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                </svg>
                            </div>
                            :
                            <div className={Style.myButton} onClick={() => removeFromCart(p.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg>
                            </div>
                    }
                    {p.chosenQuantity}
                    <div className={Style.myButton} onClick={() => addToCart(p.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
