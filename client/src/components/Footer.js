import "../styles/Footer.css";
import { useSelector } from "react-redux";


function Footer() {
	const user = useSelector((state) => state.user.value);


	function displayUsername() {
		if(user.username) {
			return (
				<div className="fot-user">
					<i className="fa-solid fa-user"></i>
					<span>{user.username}</span>
				</div>
			)
		}
	}


	return (
		<footer>
			<div id="footer-main-div">
				{displayUsername()}
				<div className="fot-git">
					<span>igips</span>
					<a href="https://github.com/igips" target="_blank" rel="noreferrer">
						<i className="fa-brands fa-github"></i>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
