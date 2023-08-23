import React, { useState } from "react";
import { createContext, useEffect, useCallback, useContext } from "react";
import { UserContext } from './UserContext'
import { ProductsContext } from './ProductsContext'

import axios from "axios";
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

	const {products} = useContext(ProductsContext);
	const { loggedInUser } = useContext(UserContext);
	const [user, setUser] = useState({});
	const [userCart, setUserCart] = useState([]);
	
	const getTotalCartPrice = () => {
		let totalPrice = 0;
		products.forEach((p) => {
			totalPrice += p.price * cartItems[p.id];
		});
		return totalPrice;
	}

	const getUserCart = () => {
		axios.get(`http://localhost:3466/Users/${loggedInUser}`).then((response) => {
			setUser(response.data);
			setUserCart(response.data.cart);
		})
	}

	const getDefaultCart = () => {
		let cart = [];
		for(let i = 0; i < products.length; i++) {
			let customizedProduct = {
				productId: products[i].id,
				chosenQuantity: 0,
				chosenExtras: products[i].Extras
			}
			cart.push(customizedProduct);
		}
		
		for(let i = 0; i < cart.length; i++) {
			for(let j = 0; j < userCart.length; j++) {
				if (cart[i].productId === userCart[j].productId) {
					console.log('userCart IS: ', userCart[j]);
					cart[i] = userCart[j];
				}
			}
		}
		console.log(cart);
		return cart;
	}

	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		getUserCart();
	}, [loggedInUser]);

	useEffect(() => {
		setCartItems(getDefaultCart());
	}, [products]);


	
	const UpdatedTempCart = (newQuantity, productId, type = '') => {
		const updatedCart = []
		const chosenExtras = products.find(p => p.id === productId)
		.Extras.map(e => {
			return {...e, isActive: e.isActive? true: false};
		}
	)
		for (const item of cartItems) {
			if (item.productId === productId) {
				const updatedQuantity = ((type === '') * item.chosenQuantity) + newQuantity;
				updatedCart.push({...item, chosenQuantity: updatedQuantity, chosenExtras: chosenExtras});
			} else {
				updatedCart.push(item)
			}
		}
		return updatedCart;
	}

	const updateExtrasInCart = (productId) => {
		const updatedCart = []
		const updatedExtras = products.find(p => p.id === productId).Extras
		console.log('cart IS: ', cartItems)
		for (const item of cartItems) {
			if(item.productId === productId) {
				console.log('itemis: ', item)
				updatedCart.push({...item, chosenExtras: updatedExtras});
			} else {
				updatedCart.push(item);
			}
		}
		axios.put(`http://localhost:3466/Users/${loggedInUser}`, {...user, cart: updatedCart});
		
		setCartItems(updatedCart)
		console.log(cartItems)
		setUser({...user, cart: cartItems})
	}

	const addToCart = (productId) => {
		const updatedCart = UpdatedTempCart(1, productId);
		axios.put(`http://localhost:3466/Users/${loggedInUser}`, {...user, cart: updatedCart});
		setCartItems(updatedCart);
		setUser({...user, cart: cartItems})
	}

	const removeFromCart = (productId) => {
		const updatedCart = UpdatedTempCart(-1, productId);
		axios.put(`http://localhost:3466/Users/${loggedInUser}`, {...user, cart: updatedCart});
		setCartItems(updatedCart)
		setUser({...user, cart: cartItems})

	}
	
	const updateCartItemCount = (newQuantity, productId) => {
		console.log(newQuantity, productId)
		const updatedCart = UpdatedTempCart(newQuantity, productId, 'update');
		axios.put(`http://localhost:3466/Users/${loggedInUser}`, {...user, cart: updatedCart});
		setCartItems(updatedCart)
		setUser({...user, cart: cartItems})
	}

	const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartPrice, updateExtrasInCart };

	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}