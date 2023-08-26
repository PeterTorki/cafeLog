import React, { useState } from "react";
import { createContext, useEffect, useCallback, useContext } from "react";
import axios from "axios";

export const ProductsContext = createContext(null);

export const ProductsContextProvider = (props) => {

	const [products, setProducts] = useState([]);
	
	const getProducts = async() => {
		const response = axios.get('https://chillcupjson.onrender.com/Products');
		const data = (await response).data;
		setProducts(data);
	}

	const updateProducts = (productsToUpdate) => {
		setProducts(productsToUpdate);
	}

	useEffect(() => {
		getProducts();
	}, []);
	
	const contextValue = { products, updateProducts };

	return <ProductsContext.Provider value={contextValue}>{props.children}</ProductsContext.Provider>
}