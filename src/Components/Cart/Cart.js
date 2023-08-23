import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { ProductsContext } from '../../Context/ProductsContext'
import ProductTempMenu from './ProductTempMenu';
import CartItem from './CartItem'
import CardBasket from '../Basket/CardBasket'
const Cart = () => {

	const {products} = useContext(ProductsContext);
	
	const { cartItems, getTotalCartPrice } = useContext(ShopContext);

	const cartToView = []
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
	
	const totalPrice = getTotalCartPrice();
	return (
		<div>

			<div className="cart">
				<div>
					<h1>Your Cart Items</h1>
				</div>
				<div className='cartItems'>
					{
						cartToView
					}
				</div>

					{
						totalPrice === 0 ?
						<div className='checkout'>
							<p>Your Cart is Empty</p>
						</div>
						:
						<div className='checkout'>
							<p>SubTotal: ${totalPrice}</p>

								<button>Continue Shopping</button>
							<button>CheckOut</button>
						</div>
					}
			</div>
		</div>
	)
}

export default Cart