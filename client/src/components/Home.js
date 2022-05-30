import "../styles/Home.css";
import ava from "../img/avatars/ghost.svg";

function Home() {
	return (
		<main>
			<div className="main-main-container">
				<div className="message-container">
					<div className="message-ava-container">
						<img src={ava} alt="" />
					</div>
					<div className="message-content-container">
						<span className="message-title">Sralala</span>

						<div className="message-text-container">HuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalskHuhushasalsk</div>

                        {/* <button className="delete-btn">Delete</button> */}

						<div className="message-date-username-container">
							<div className="date-container">
								<i className="fa-solid fa-clock"></i>
								&nbsp; &nbsp;
								<span>2022-5-30 &nbsp; 16:34</span>
							</div>
							<div className="username-container">
								<i className="fa-solid fa-user"></i>
								&nbsp; &nbsp;
								<span>unknown</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;
