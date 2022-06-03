import "../styles/Home.css";
import ava from "../img/avatars/ghost.svg";
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";
import { setMessages } from "../features/user/messagesSlice";
import moment from 'moment';
import uniqid from 'uniqid';

function Home() {
	const user = useSelector((state) => state.user.value);
	const messages = useSelector((state) => state.messages.value);
	const dispatch = useDispatch();
    

	useEffect(() => {
		axios.get("/user").then((res) => {
			dispatch(setUser(res.data));
		});

		axios.get("/messages").then((res) => {
			dispatch(setMessages(res.data));
		});
	}, []);

    function deleteMessage(id) {
        axios.delete(`/message/${id}`).then((res) => {
            dispatch(setMessages(res.data));
        });
    }

	function deleteBtn(id) {
		if (user.memberStatus === "admin") {
			return <button onClick={() => deleteMessage(id)} className="delete-btn">Delete</button>;
		}
	}

	return (
		<main>
			<div className="main-main-container">
				<div className="message-container">
					<div className="message-ava-container">
                        <img src={ava} alt="" />
					</div>
					<div className="message-content-container">
						<span className="message-title">Hello, world!</span>

						<div className="message-text-container">
							To see additional information, register an account , then use the password "member" to
							become a member or use the password "admin" to become an admin!
						</div>

						<div className="message-date-username-container">
							<div className="date-container">
								<i className="fa-solid fa-clock"></i>
								&nbsp; &nbsp;
								<span>{user.memberStatus !== "user" && user.username ? "2022-5-30 16:34" : "-"}</span>
							</div>
							<div className="username-container">
								<i className="fa-solid fa-user"></i>
								&nbsp; &nbsp;
								<span>{user.memberStatus !== "user" && user.username ? "igips" : "unknown"}</span>
							</div>
						</div>
					</div>
				</div>
				{messages.map((message) => {
					return (
						<div key={uniqid()} className="message-container">
							<div className="message-ava-container">
								<img src={message.avatar} alt="" />
							</div>
							<div className="message-content-container">
								<span className="message-title">{message.title}</span>

								<div className="message-text-container">
									{message.message}
								</div>

								{deleteBtn(message._id)}

								<div className="message-date-username-container">
									<div className="date-container">
										<i className="fa-solid fa-clock"></i>
										&nbsp; &nbsp;
										<span>
											{user.memberStatus !== "user" && user.username ? moment(parseInt(message.timeStamp)).format("DD-MM-YYYY HH:mm") : "-"}
										</span>
									</div>
									<div className="username-container">
										<i className="fa-solid fa-user"></i>
										&nbsp; &nbsp;
										<span>
											{user.memberStatus !== "user" && user.username ? message.user.username : "unknown"}
										</span>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</main>
	);
}

export default Home;
