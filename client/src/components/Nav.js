import "../styles/Nav.css";
import logo from "../img/logo.jpg";

function Nav() {
	return (
		<nav>
			<div id="nav-main-div">
				<div id="logo-div">
					<span>Members Only</span>      
					<img src={logo} alt="" />
				</div>
                <div id="login-reg-nav-div">
                    <div className="nav-login-reg">
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        <span>Sign In</span>
                    </div>
                    <div className="nav-login-reg">
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        <span>Sign Up</span>
                    </div>
                </div>
			</div>
		</nav>
	);
}

export default Nav;
