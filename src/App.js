import React from "react";
//importing react router dom packages

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//importing Pages
import Home from "./pages/Home";
//Importing components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
const App = () => {
	return (
		<div className="overflow-hidden">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={Home} />
					<Route path="/products/:id" element={ProductDetails} />
				</Routes>
			</Router>
			<Sidebar />
			<Footer />
		</div>
	);
};

export default App;
