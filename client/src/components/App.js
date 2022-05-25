import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Nav from "./Nav";
import Footer from "./Footer";

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
			<Nav />
			<Footer />
		</div>
	);
}

export default App;
