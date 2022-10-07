import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	resturant: {
		id: null,
		imgUrl: null,
		title: null,
		rating: null,
		genre: null,
		address: null,
		short_description: null,
		dishes: null,
	},
};

export const resturantSlice = createSlice({
	name: 'resturant',
	initialState,
	reducers: {
		setResturant: (state, { payload }) => {
			state.resturant = payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setResturant } = resturantSlice.actions;

// basket items
export const selectResturant = (state) => state.resturants.resturant;

export default resturantSlice.reducer;
