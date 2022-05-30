import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
	// const [a, setA] = useState(null);

	// useEffect(() => {
	// 	fetch("/ha")
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setA(data.message);
	// 		});
	// }, []);

	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signIn" element={<SignIn />} />
					<Route path="/signUp" element={<SignUp />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
