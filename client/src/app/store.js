import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import messagesReducer from "../features/user/messagesSlice";


export default configureStore({
	reducer: {
		user: userReducer,
		messages: messagesReducer,
	},
});
