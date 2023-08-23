import React from 'react'
import styles from "../Style/Menu.module.css";
import { UserContext } from '../Context/UserContext';
import axios from 'axios';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Card = ({ product, handleExtras, loggedInUserId }) => {
	
	const { addToCart, cartItems } = useContext(ShopContext)
	const ItemChosenQuantity = cartItems.find(c => c.productId === product.id)?.chosenQuantity || 0;
		
	return (
		<div className={styles.card} key={product.id}>
			<div className={styles.info}>
				<img src={product.imgSrc} className={styles.imageItem} alt="imgProduct"/>
				<div className={styles.textInfo}>
					<h5>{product.name}</h5>
					<p className={styles.textP}>{product.description}</p>
					<h5 className={styles.price}>{product.price} $</h5>
				</div>
			</div>
			<h6>Extras</h6>
			{
				product.Extras.length ?
				<div>
					<div className={styles.Extras}>
					{
						product.Extras.map((e) => {
							return <button key={e.id} className={`${styles.exBtn} ${e.isActive? styles.exBtnSelected: ''}`} onClick={() => handleExtras(product.id, e.id)}>{e.name}</button>
						})
					}
					</div>
				</div>
				:
				<h5 style={{textAlign:'center'}}>No Extras</h5>
				}
			<button className={styles.toCart} 
			onClick={() => addToCart(product.id)}
			>
				Add to cart {ItemChosenQuantity > 0 && <>({ItemChosenQuantity})</>}
			</button>
		</div>
	)
}

export default Card