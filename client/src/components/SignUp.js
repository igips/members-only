import "../styles/SignUpIn.css";
import spy from "../img/avatars/spy.svg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/user/userSlice";

function SignUp() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rPassword, setRpassword] = useState("");
	const navigate = useNavigate();
	const user = useSelector((state) => state.user.value);
	const dispatch = useDispatch();

	function handleUsernameChange(e) {
		setUsername(e.target.value);
	}

	function handlePasswordChange(e) {
		setPassword(e.target.value);
	}

	function handleRpasswordChange(e) {
		setRpassword(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		const usernameInput = document.getElementById("signUp-username-input");
		const submitButton = document.getElementById("signUp-submit-btn");
		const btnSpinner = document.getElementById("signUp-btn-spinner");
		const btnSpan = document.getElementById("signUp-btn-span");

		btnSpan.style.display = "none";
		btnSpinner.style.display = "block";

		axios
			.post("/signUp", { username: username, password: password })
			.then((res) => {
				btnSpinner.style.display = "none";
				btnSpan.style.display = "block";

				if (res.data === "User already exists!") {
					usernameInput.setCustomValidity("Username already taken!");
					submitButton.click();
				} else {
					dispatch(setUser(res.data));
					navigate("/");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}

	function checkIfPasswordMatch() {
		const passwordInput = document.getElementById("pass2");
		const passwordInput2 = document.getElementById("pass1");

		if (passwordInput.value !== passwordInput2.value) {
			passwordInput.setCustomValidity("Password Must be Matching.");
		} else {
			passwordInput.setCustomValidity("");
		}
	}

	function content() {
		if (typeof user === "string") {
			return (
				<div className="singUpIn-main-container">
					<div className="signUpIn-inner-container">
						<p className="signUp-In-span">Sign Up!</p>
						<img src={spy} alt="" />
						<form method="POST" onSubmit={(e) => handleSubmit(e)}>
							<input
								id="signUp-username-input"
								type="text"
								maxLength="15"
								minLength="3"
								placeholder="Username"
								onChange={(e) => handleUsernameChange(e)}
								value={username}
								required
								onInput={() => document.getElementById("signUp-username-input").setCustomValidity("")}
								autoComplete="off"
							/>
							<input
								id="pass1"
								type="password"
								minLength="6"
								placeholder="Password"
								onChange={(e) => handlePasswordChange(e)}
								value={password}
								onInput={() => checkIfPasswordMatch()}
								required
							/>
							<input
								id="pass2"
								type="password"
								minLength="6"
								placeholder="Repeat password"
								onChange={(e) => handleRpasswordChange(e)}
								value={rPassword}
								onInput={() => checkIfPasswordMatch()}
								required
							/>
							<button id="signUp-submit-btn" type="submit" className="signUp-In-btn">
								<div id="signUp-btn-spinner">
									<i className="fa-solid fa-circle-notch fa-spin"></i>
								</div>
								<span id="signUp-btn-span">Sign Up</span>
							</button>
						</form>
					</div>
				</div>
			);
		} else {
			return (<></>)
		}
	}

	return <main>{content()}</main>;
}

export default SignUp;
