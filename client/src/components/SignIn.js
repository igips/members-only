import "../styles/SignUpIn.css";
import spy from "../img/avatars/spy.svg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	function handleUsernameChange(e) {
		setUsername(e.target.value);
	}

	function handlePasswordChange(e) {
		setPassword(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		const usernameInput = document.getElementById("signIn-username-input");
		const passInput = document.getElementById("passSignIn");
		const submitButton = document.getElementById("signIn-submit-btn");
		const btnSpinner = document.getElementById("signIn-btn-spinner");
		const btnSpan = document.getElementById("signIn-btn-span");

		btnSpan.style.display = "none";
		btnSpinner.style.display = "block";

		axios
			.post("/signIn", { username: username, password: password })
			.then((res) => {
				btnSpinner.style.display = "none";
				btnSpan.style.display = "block";

				if (res.data.message === "Incorrect username!") {
					usernameInput.setCustomValidity("Incorrect username!");
					submitButton.click();
				} else if (res.data.message === "Incorrect password!") {
					passInput.setCustomValidity("Incorrect password!");
					submitButton.click();
				} else {
					navigate("/");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}

	return (
		<main>
			<div className="singUpIn-main-container">
				<div className="signUpIn-inner-container">
					<p className="signUp-In-span">Sign In!</p>
					<img src={spy} alt="" />
					<form method="POST" onSubmit={(e) => handleSubmit(e)}>
						<input
							id="signIn-username-input"
							type="text"
							maxLength="15"
							minLength="3"
							placeholder="Username"
							onChange={(e) => handleUsernameChange(e)}
							value={username}
							required
							onInput={() => document.getElementById("signIn-username-input").setCustomValidity("")}
						/>
						<input
							id="passSignIn"
							type="password"
							minLength="6"
							placeholder="Password"
							onChange={(e) => handlePasswordChange(e)}
							value={password}
                            onInput={() => document.getElementById("passSignIn").setCustomValidity("")}
							required
						/>
						<button id="signIn-submit-btn" type="submit" className="signUp-In-btn">
							<div id="signIn-btn-spinner">
								<i className="fa-solid fa-circle-notch fa-spin"></i>
							</div>
							<span id="signIn-btn-span">Sign In</span>
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}

export default SignIn;
