import React, { useState } from "react";
import { createContext, useEffect, useCallback, useContext } from "react";
import axios from "axios";

export const ProductsContext = createContext(null);

export const ProductsContextProvider = (props) => {

	const [products, setProducts] = useState([]);
	
	const getProducts = () => {
		axios.get('http://localhost:3477/Products').then((response) => {
			setProducts(response.data);
		})
	}

	useEffect(() => {
		getProducts();
	}, []);
	
	const contextValue = { products, setProducts };

	return <ProductsContext.Provider value={contextValue}>{props.children}</ProductsContext.Provider>
}