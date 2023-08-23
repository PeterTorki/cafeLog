import React, { useState } from "react";
import { createContext, useEffect, useCallback, useContext } from "react";
import { UserContext } from './UserContext'
import { ProductsContext } from './ProductsContext'

import axios from "axios";
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

	const {products, setProducts} = useContext(ProductsContext);
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
				chosenExtras: []
			}
			cart.push(customizedProduct);
		}
		for(let i = 0; i < cart.length; i++) {
			for(let j = 0; j < userCart.length; j++) {
				if (cart[i].productId === userCart[j].productId) {
					cart[i] = userCart[j];
				}
			}
		}

		return cart;
	}

	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		setCartItems(getDefaultCart());
	}, [products]);

	useEffect(() => {
		getUserCart();
	}, [loggedInUser]);

	const addToCart = (productId) => {
		console.log(cartItems);

		
		const updatedCart = []
		for (const item of cartItems) {
			if (item.productId === productId) {
				updatedCart.push({...item, chosenQuantity: item.chosenQuantity + 1})
			} else {
				updatedCart.push(item)
			}
		}
		
		axios.put(`http://localhost:3466/Users/${loggedInUser}`, {...user ,cart: updatedCart});
		setCartItems(updatedCart);
		setUser({...user, cart: cartItems})
		
	}

	const removeFromCart = (productId) => {
		setCartItems((prev) => 
			({...prev, [productId]: prev[productId] - 1})
		)
	}
	
	const updateCartItemCount = (newQuantity, productId) => {
		setCartItems((prev) => 
			({...prev, [productId]: newQuantity})
		)
	}

	const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartPrice };

	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}