import React from 'react'
import styles from "../Style/Menu.module.css";
import { UserContext } from '../Context/UserContext';
import axios from 'axios';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { ProductsContext } from '../Context/ProductsContext';

const Card = ({ product, loggedInUserId }) => {
	const { products, updateProducts} = useContext(ProductsContext);
	const { updateExtrasInCart, cartItems, addToCart } = useContext(ShopContext);

	const chooseExtras = (productId, ExtraId) => {

    console.log(productId, ExtraId);

    let currentProduct = products.find(p => p.id === productId);

    const currentExtras = currentProduct.Extras.map(e => {
      if (e.id === ExtraId) {
        e.isActive = !e.isActive;
      }
      return e;
    });

    currentProduct = {...currentProduct, Extras: currentExtras};
    console.log(currentProduct)
    const newProducts = products.map(p => {
      if (p.id === productId) {
        p = currentProduct;
      }
      return p;
    });
    console.log( 'cartItems' ,cartItems);
    updateProducts(newProducts);
    updateExtrasInCart(productId);
  }

	const ItemChosenQuantity = cartItems.find(c => c.productId === product.id)?.chosenQuantity || 0;
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
							return <button key={e.id} className={`${styles.exBtn} ${e.isActive? styles.exBtnSelected: ''}`} onClick={() => chooseExtras(product.id, e.id)}>{e.name}</button>
						})
					}
					</div>
				</div>
				:
				<h5 style={{textAlign:'center'}}>No Extras</h5>
				}
			</div>
			<button className={styles.toCart} 
			onClick={() => addToCart(product.id)}
			>
				Add to cart {ItemChosenQuantity > 0 && <>({ItemChosenQuantity})</>}
			</button>
		</div>
	)
}

export default Card