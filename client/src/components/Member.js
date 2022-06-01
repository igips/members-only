import spy from "../img/avatars/spy.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/user/userSlice";

function Member() {
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const user = useSelector((state) => state.user.value);
	const dispatch = useDispatch();

	function handlePasswordChange(e) {
		setPassword(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		const passInput = document.getElementById("memberPass");
		const submitButton = document.getElementById("member-submit-btn");
		const btnSpinner = document.getElementById("member-btn-spinner");
		const btnSpan = document.getElementById("member-btn-span");

		btnSpan.style.display = "none";
		btnSpinner.style.display = "block";

		axios
			.post("/member", { password: password, user: user })
			.then((res) => {
				btnSpinner.style.display = "none";
				btnSpan.style.display = "block";

				if (res.data === "Incorrect password!") {
					passInput.setCustomValidity("Incorrect password!");
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

	function content() {
		if (user.memberStatus !== "member") {
			return (
				<div className="singUpIn-main-container">
					<div className="signUpIn-inner-container">
						<p className="signUp-In-span">Become a Member!</p>
						<img src={spy} alt="" />
						<form method="POST" onSubmit={(e) => handleSubmit(e)}>
							<input
								id="memberPass"
								type="password"
								placeholder="Enter member password"
								onChange={(e) => handlePasswordChange(e)}
								value={password}
								onInput={() => document.getElementById("memberPass").setCustomValidity("")}
								required
							/>
							<button id="member-submit-btn" type="submit" className="signUp-In-btn">
								<div id="member-btn-spinner">
									<i className="fa-solid fa-circle-notch fa-spin"></i>
								</div>
								<span id="member-btn-span">Submit</span>
							</button>
						</form>
					</div>
				</div>
			);
		} else {
			return (
				<div className="singUpIn-main-container">
					<div className="signUpIn-inner-container">
						<p className="signUp-In-span">You are already a Member!</p>
						<img src={spy} alt="" />
					</div>
				</div>
			);
		}
	}

	return <main>{content()}</main>;
}

export default Member;
