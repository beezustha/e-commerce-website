import React, { createContext, useState, useEffect } from "react";

//Create context
export const ProductContext = createContext();
const ProductProvider = (children) => {
	// State for products and setProducts function
	const [products, setProducts] = useState([]);
	//Fetching Products
	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch("https://fakestoreapi.com/products");
			const data = await response.json();
			console.log(
				"🚀 ~ file: ProductContext.js:13 ~ fetchProducts ~ data:",
				data
			);
			setProducts(data);
		};
	});
	return (
		<ProductContext.Provider value={{ products }}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;
