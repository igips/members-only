import "../styles/Footer.css";

function Footer() {
	return (
		<footer>
			<div id="footer-main-div">
				{/* <div className="fot-user">
					<i className="fa-solid fa-user"></i>
					<span>aaaaUser1</span>
				</div> */}
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
