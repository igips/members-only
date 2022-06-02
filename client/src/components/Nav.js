import "../styles/Nav.css";
import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { unSetUser } from "../features/user/userSlice";

function Nav() {
	const user = useSelector((state) => state.user.value);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function signOut() {
		axios.post("/signOut").then((res) => {
			if (res.data === "success") {
				dispatch(unSetUser());
				navigate("/");
			}
		});
	}

	function navControlls() {
		if (!user.username) {
			return (
				<div className="signIn-signOut-container">
					<Link to="/signIn">
						<div className="nav-login-reg">
							<i className="fa-solid fa-arrow-right-to-bracket"></i>
							<span>Sign In</span>
						</div>
					</Link>
					<Link to="/signUp">
						<div className="nav-login-reg">
							<i className="fa-solid fa-arrow-right-to-bracket"></i>
							<span>Sign Up</span>
						</div>
					</Link>
				</div>
			);
		} else {
			return (
				<div className="signIn-signOut-container nav-signed-in-links">
					<Link to="/message">
						<div className="nav-login-reg">
							<i className="fa-solid fa-envelope"></i>
							<span>Create Message</span>
						</div>
					</Link>
					<Link to="/member">
						<div className="nav-login-reg">
							<i className="fa-solid fa-user-graduate"></i>
							<span>Member</span>
						</div>
					</Link>
					<Link to="/admin">
						<div className="nav-login-reg">
							<i className="fa-solid fa-user-secret"></i>
							<span>Admin</span>
						</div>
					</Link>
					<div onClick={() => signOut()} className="nav-login-reg">
						<i className="fa-solid fa-arrow-right-to-bracket"></i>
						<span>Sign Out</span>
					</div>
				</div>
			);
		}
	}

	return (
		<nav>
			<div id="nav-main-div">
				<Link to="/">
					<div id="logo-div">
						<span>Members Only</span>
						<img src={logo} alt="" />
					</div>
				</Link>
				<div id="login-reg-nav-div">{navControlls()}</div>
			</div>
		</nav>
	);
}

export default Nav;
