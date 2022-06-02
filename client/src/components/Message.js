import "../styles/SignUpIn.css";
import spy from "../img/avatars/spy.svg";
import alien from "../img/avatars/alien.svg";
import clown from "../img/avatars/clown.svg";
import cowboy from "../img/avatars/cowboy.svg";
import devil from "../img/avatars/devil.svg";
import evil from "../img/avatars/evil.svg";
import ghost from "../img/avatars/ghost.svg";
import robot from "../img/avatars/robot.svg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../features/user/messagesSlice";


function Message() {
	const [title, setTitle] = useState("");
	const [message, setMessage] = useState("");
	const navigate = useNavigate();
	const user = useSelector((state) => state.user.value);
	const avatars = [alien, clown, cowboy, devil, evil, ghost, robot];
    const dispatch = useDispatch();

	function handleTitleChange(e) {
		setTitle(e.target.value);
	}

	function handleMessageChange(e) {
		setMessage(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		const btnSpinner = document.getElementById("message-btn-spinner");
		const btnSpan = document.getElementById("message-btn-span");

		btnSpan.style.display = "none";
		btnSpinner.style.display = "block";

		axios
			.post("/message", {
				title: title,
				message: message,
				user: user._id,
				avatar: avatars[Math.floor(Math.random() * avatars.length)],
                timeStamp: Date.now()
			})
			.then((res) => {
				btnSpinner.style.display = "none";
				btnSpan.style.display = "block";
                res.data.user = {};
                res.data.user.username = user.username;
                dispatch(addMessage(res.data));
				navigate("/");
			})
			.catch((error) => {
				console.error(error);
			});
	}

	return (
		<main>
			<div className="singUpIn-main-container">
				<div className="signUpIn-inner-container">
					<p className="signUp-In-span">Create a message!</p>
					<img src={spy} alt="" />
					<form method="POST" onSubmit={(e) => handleSubmit(e)}>
						<input
							id="message-title-input"
							type="text"
							placeholder="Title"
							onChange={(e) => handleTitleChange(e)}
							value={title}
							required
							autoComplete="off"
						/>
						<textarea
							id="message-input"
							placeholder="Message"
							onChange={(e) => handleMessageChange(e)}
							value={message}
							required
						/>
						<button id="message-submit-btn" type="submit" className="signUp-In-btn">
							<div id="message-btn-spinner">
								<i className="fa-solid fa-circle-notch fa-spin"></i>
							</div>
							<span id="message-btn-span">Submit</span>
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}

export default Message;
