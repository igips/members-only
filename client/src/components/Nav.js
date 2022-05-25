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
			</div>
		</nav>
	);
}

export default Nav;
