import React from 'react'
import styles from "../Style/Menu.module.css";
import { UserContext } from '../Context/UserContext';
import axios from 'axios';
const Card = ({ product, handleExtras, loggedInUserId }) => {
	
		const AddProductToCart = async() => {
			const user = await axios.get(`http://localhost:3466/Users/${loggedInUserId}`);
			const cart = await user.data.cart;
			
			const customizedProduct = {
					"productId": product.id,
					"chosenQuantity": 1,
					"chosenExtras": product.Extras.filter(e => e.isActive?e: null),
					"chosenSize": "L"
			};
			const newCart = [...cart, customizedProduct];
			const newUser = {...user.data, cart: newCart};
			axios.put(`http://localhost:3466/Users/${loggedInUserId}`, newUser);
			console.log(customizedProduct);
	}
	return (
		<div className={styles.card} key={product.id}>
			<div className={styles.info}>
				<div className={styles.top}>
					<h3>{product.name}</h3>
					<img src={product.imgSrc} className={styles.imageItem} alt="imgProduct"/>
				</div>
				<div className={styles.textInfo}>
					<p className={styles.textP}>{product.description}</p>
					<center><h3 className={styles.price}>{product.price} $</h3></center>
				</div>
			</div>
			<h6>Extras</h6>
			<div className={styles.ex}>
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
			</div>
			<button className={styles.toCart} onClick={() => AddProductToCart()}>Add To Cart</button>
		</div>
	)
}

export default Card