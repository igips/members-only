import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Admin from "./Admin";
import Member from "./Member";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setUser } from "../features/user/userSlice";
import Message from "./Message";

function App() {
	const user = useSelector((state) => state.user.value);
	const dispatch = useDispatch();
	

	useEffect(() => {
		axios.get("/checkUser").then((res) => {
			dispatch(setUser(res.data));
		});
	}, []);


	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signIn" element={user.username ? <Home /> : <SignIn />} />
					<Route path="/signUp" element={user.username ? <Home /> : <SignUp />} />
					<Route path="/admin" element={user.username ? <Admin /> : <Home />} />
					<Route path="/member" element={user.username ? <Member /> : <Home />} />
					<Route path="/message" element={user.username ? <Message /> : <Home />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
