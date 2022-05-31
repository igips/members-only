import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		value: {},
	},
	reducers: {
		setUser: (state, action) => {
			state.value = action.payload;
		},
		unSetUser: (state) => {
			state.value = {};
		},
	},
});

export const { setUser, unSetUser } = userSlice.actions;

export default userSlice.reducer;
