import "../styles/Nav.css";
import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<div id="nav-main-div">
				<Link to="/">
					<div id="logo-div">
						<span>Members Only</span>
						<img src={logo} alt="" />
					</div>
				</Link>
				<div id="login-reg-nav-div">
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
					{/* <div className="nav-login-reg">
                        <i className="fa-solid fa-envelope"></i>
                        <span>Create Message</span>
                    </div>
                    <div className="nav-login-reg">
                        <i className="fa-solid fa-user-graduate"></i>
                        <span>Member</span>
                    </div>
                    <div className="nav-login-reg">
                        <i className="fa-solid fa-user-secret"></i>
                        <span>Admin</span>
                    </div>
                    <div className="nav-login-reg">
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        <span>Sign Out</span>
                    </div> */}
				</div>
			</div>
		</nav>
	);
}

export default Nav;
