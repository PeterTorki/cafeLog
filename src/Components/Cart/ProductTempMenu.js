import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const ProductTempMenu = ({data}) => {
	const { addToCart, cartItems } = useContext(ShopContext)
	const ItemChosenQuantity = cartItems.find(c => c.productId === data.id)?.chosenQuantity || 0;
	return (
		<div className='data' key={data.id}>
			<img src={data.imgSrc} alt={data.name}width={100} />
			<h3>{data.name}</h3>
			<h3>{data.price}</h3>
			<button onClick={() => addToCart(data.id)}>
				Add to cart {ItemChosenQuantity > 0 && <>({ItemChosenQuantity})</>}
			</button>
		</div>
	)
}

export default ProductTempMenu