import React, { useState } from "react";
import { createContext, useEffect, useCallback, useContext } from "react";
import { UserContext } from './UserContext'
import { ProductsContext } from './ProductsContext'

import axios from "axios";
import { nanoid } from "nanoid";
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

	const [cartItems, setCartItems] = useState([]);

	const {products, updateProducts} = useContext(ProductsContext);
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

	const updateExtrasInCart = async(productId) => {
		const updatedCart = []
		const updatedExtras = [...products.find(p => p.id === productId).Extras]
		for (const item of cartItems) {
			if(item.productId === productId) {
				updatedCart.push({...item, chosenExtras: updatedExtras});
			} else {
				updatedCart.push(item);
			}
		}

		let userGet = {};
		await axios.get(`http://localhost:3466/Users/${loggedInUser}`).then((response) => {
			userGet = response.data;
		})
		await axios.put(`http://localhost:3466/Users/${loggedInUser}`, {...userGet, cart: updatedCart});
		setCartItems(updatedCart);
		setUser({...userGet, cart: cartItems})
		
	}

	const addToCart = async (productId) => {
		
		const updatedCart = UpdatedTempCart(1, productId);
		
		let userGet = {};
		await axios.get(`http://localhost:3466/Users/${loggedInUser}`).then((response) => {
			userGet = response.data;
		})
		await axios.put(`http://localhost:3466/Users/${loggedInUser}`, {...userGet, cart: updatedCart});
		setCartItems(updatedCart);
		setUser({...userGet, cart: cartItems})
	}
	
	const removeFromCart = async(productId) => {
		const updatedCart = UpdatedTempCart(-1, productId);
		
		let userGet = {};
		await axios.get(`http://localhost:3466/Users/${loggedInUser}`).then((response) => {
			userGet = response.data;
		})
		await axios.put(`http://localhost:3466/Users/${loggedInUser}`, {...userGet, cart: updatedCart});
		setCartItems(updatedCart);
		setUser({...userGet, cart: cartItems})
	}
	
	const updateCartItemCount = async(newQuantity, productId) => {
		const updatedCart = UpdatedTempCart(newQuantity, productId, 'update');

		let userGet = {};
		await axios.get(`http://localhost:3466/Users/${loggedInUser}`).then((response) => {
			userGet = response.data;
		})
		await axios.put(`http://localhost:3466/Users/${loggedInUser}`, {...userGet, cart: updatedCart});
		setCartItems(updatedCart);
		setUser({...userGet, cart: cartItems})
	}

	const deleteCart = async() => {
		const cartItemsCopy = [...cartItems];

		let userGet = {};
		await axios.get(`http://localhost:3466/Users/${loggedInUser}`).then((response) => {
			userGet = response.data;
		})
		
		const userPreviousOrders = [...userGet.previousOrders];
		const previousOrders = [...userPreviousOrders, {orderId: `ord-${nanoid()}`, orderDate: new Date().toISOString().slice(0, 10), orderPrice: getTotalCartPrice(), orderProducts: cartItemsCopy}];
		axios.put(`http://localhost:3466/Users/${loggedInUser}`, {...userGet, cart: [], previousOrders: previousOrders});
		const cart = [...cartItems]

		for(let i = 0; i < cart.length; i++) {
			cart[i].chosenQuantity = 0;
		}
		setCartItems(cart)
		// make all extras of products inactive using setProducts
		const updatedProducts = [...products];
		for(let i = 0; i < updatedProducts.length; i++) {
			updatedProducts[i].Extras.map(e => {
				e.isActive = false;
				return e;
			})
		}
		updateProducts(updatedProducts);

		setUser({...userGet, cart: cart, previousOrders: previousOrders})
		
	}

	const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartPrice, updateExtrasInCart, deleteCart, user };

	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}

