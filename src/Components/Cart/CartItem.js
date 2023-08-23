import React, {useContext} from 'react'
import { ShopContext } from '../../Context/ShopContext'

const CartItem = ({data}) => {
	const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)
	
	return (
		<div className='cartItem'>
			<img src={data.imgSrc} width={100}/>
			<div className='description'>
				<p>
					<b>{data.name}</b>
				</p>
				<p>${data.price}</p>
				<p>Extras: {data.chosenExtras.map((extra) => {
					return (
						<span>{extra} </span>
					)
				})}</p>
				<div className='countHandler'>
					<button onClick={() => removeFromCart(data.id)}>-</button>
					<input value={cartItems[data.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), data.id)}/>
					<button onClick={() => addToCart(data.id)}>+</button>
				</div>
			</div>
		</div>
	)
}

export default CartItem