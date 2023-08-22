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
			"chosenExtras": product.Extras.filter(e => e.isActive === true).map(e => e.id),
			"chosenQuantity": 1,
			"chosenSize": "S"
		}
		const newCart = [...cart, customizedProduct];
		const newUser = {...user.data, cart: newCart};
		axios.put(`http://localhost:3466/Users/${loggedInUserId}`, newUser);
	}

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
			<button className={styles.toCart} onClick={() => AddProductToCart()}>Add To Cart</button>
		</div>
	)
}

export default Card