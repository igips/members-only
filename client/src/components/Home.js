import "../styles/Home.css";
import ava from "../img/avatars/ghost.svg";
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";

function Home() {
	const user = useSelector((state) => state.user.value);
	const dispatch = useDispatch();

	useEffect(() => {
		axios.get("/checkUser").then((res) => {
			dispatch(setUser(res.data));
		});
	}, []);

	function deleteBtn() {
		if (user.memberStatus === "admin") {
			return <button className="delete-btn">Delete</button>;
		}
	}

	return (
		<main>
			<div className="main-main-container">
				<div className="message-container">
					<div className="message-ava-container">
						<img src={ava} alt="" />
					</div>
					<div className="message-content-container">
						<span className="message-title">Sralala</span>

						<div className="message-text-container">
							HuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalsk
						</div>

						{deleteBtn()}

						<div className="message-date-username-container">
							<div className="date-container">
								<i className="fa-solid fa-clock"></i>
								&nbsp; &nbsp;
								<span>2022-5-30 &nbsp; 16:34</span>
							</div>
							<div className="username-container">
								<i className="fa-solid fa-user"></i>
								&nbsp; &nbsp;
								<span>unknown</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;
