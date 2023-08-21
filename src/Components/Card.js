import React from 'react'
import styles from "../Style/Menu.module.css";

const Card = ({ product, handleExtras }) => {
	
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
			<div className={styles.Extras}>
				{
					product.Extras.map((e) => {
						return <button key={e.id} className={`${styles.exBtn} ${e.isActive? styles.exBtnSelected: ''}`} onClick={() => handleExtras(product.id, e.id)}>{e.name}</button>
					})
				}
			</div>
			<button className={styles.toCart}>Add To Cart</button>
		</div>
	)
}

export default Card