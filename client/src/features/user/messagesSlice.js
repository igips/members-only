import { createSlice } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
	name: "messages",
	initialState: {
		value: [],
	},
	reducers: {
		addMessage: (state, action) => {
			state.value.unshift(action.payload);
		},
		setMessages: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { addMessage, setMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
