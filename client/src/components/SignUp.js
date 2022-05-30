import "../styles/SignUpIn.css";
import spy from "../img/avatars/spy.svg";
import axios from "axios";
import { useState } from "react";

function SignUp() {
	const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rPassword, setRpassword] = useState("");

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
		axios.post("/signUp", { username: username });
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

	return (
		<main>
			<div className="singUpIn-main-container">
				<div className="signUpIn-inner-container">
					<p className="signUp-In-span">Sign Up!</p>
					<img src={spy} alt="" />
					<form method="POST" onSubmit={(e) => handleSubmit(e)}>
						<input
                            id="signUp-username-input"
							type="text"
							maxLength="15"
							placeholder="Username"
							onChange={(e) => handleUsernameChange(e)}
							value={username}
							required
                            onInput={() => document.getElementById("signUp-username-input").setCustomValidity("")}
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
						<button type="submit" className="signUp-In-btn">
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}

export default SignUp;
