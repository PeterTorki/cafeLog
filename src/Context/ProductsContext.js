import React, { useState } from "react";
import { createContext, useEffect, useCallback, useContext } from "react";
import axios from "axios";

export const ProductsContext = createContext(null);

export const ProductsContextProvider = (props) => {

	const [products, setProducts] = useState([]);
	
	const getProducts = () => {
		axios.get('https://chillcupjson.onrender.com/Products').then((response) => {
			setProducts(response.data);
		})
	}

	const updateProducts = (productsToUpdate) => {
		// axios.put('https://chillcupjson.onrender.com/Products/', productTest).then((response) => {
		// 	console.log(response.data);
		// }).catch((err) => {
		// 	console.log(err);
		// })
		setProducts(productsToUpdate);
	}

	useEffect(() => {
		getProducts();
	}, []);
	
	const contextValue = { products, updateProducts };

	return <ProductsContext.Provider value={contextValue}>{props.children}</ProductsContext.Provider>
}