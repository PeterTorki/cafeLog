import React, { useState } from "react";
import { createContext, useEffect, useCallback, useContext } from "react";
import { UserContext } from './UserContext'
import { ProductsContext } from './ProductsContext'

import axios from "axios";
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

	const [cartItems, setCartItems] = useState([]);

	const {products} = useContext(ProductsContext);
	const { loggedInUser } = useContext(UserContext);
	const [user, setUser] = useState({});
	const [userCart, setUserCart] = useState([]);
	
	const getElemPrice = (productId)=>{
		return products.find(p => p.id === productId).price;
	}
	
	const getTotalCartPrice = () => {
		let totalPrice = 0;
		cartItems.forEach(c => {
			totalPrice += parseInt(getElemPrice(c.productId)) * c.chosenQuantity;
			c.chosenExtras.forEach(e => {
				totalPrice += parseInt(e.price) * (e.isActive?1:0)
			})
		})
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
					cart[i] = userCart[j];
				}
			}
		}
		return cart;
	}


	useEffect(() => {
		getUserCart();
	}, [loggedInUser, products]);

	useEffect(() => {
		setCartItems(getDefaultCart());
	}, [products]);


	useEffect(() => {
		console.log('Update From Extras', cartItems);
		console.log('Update From Products', products);

	}, [cartItems, products])
	
	const UpdatedTempCart = (newQuantity, productId, type = '') => {
		const updatedCart = []
		const chosenExtras = {...products.find(p => p.id === productId)}
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
		const updatedExtras = [...products.find(p => p.id === productId).Extras]
		for (const item of cartItems) {
			if(item.productId === productId) {
				updatedCart.push({...item, chosenExtras: updatedExtras});
			} else {
				updatedCart.push(item);
			}
		}
		axios.put(`http://localhost:3466/Users/${loggedInUser}`, {...user, cart: updatedCart});
		
		setCartItems(updatedCart)
		setUser({...user, cart: cartItems})
	}

	const addToCart = (productId) => {
		if(cartItems.length === 0) {
			const cart = getDefaultCart();
			setCartItems(cart);
		};

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
		const updatedCart = UpdatedTempCart(newQuantity, productId, 'update');
		axios.put(`http://localhost:3466/Users/${loggedInUser}`, {...user, cart: updatedCart});
		setCartItems(updatedCart)
		setUser({...user, cart: cartItems})
	}

	const deleteCart = () => {
		axios.put(`http://localhost:3466/Users/${loggedInUser}`, {...user, cart: []});
		const cart = [...cartItems]
		// make every chosenQuantuty 0
		for(let i = 0; i < cart.length; i++) {
			cart[i].chosenQuantity = 0;
		}
		setCartItems(cart)
		setUser({...user, cart: cart})
	}

	const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartPrice, updateExtrasInCart, deleteCart, user };

	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}