import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		// add reducer
		addToBasket: (state, { payload }) => {
			state.items = [...state.items, payload];
		},

		// remove reducer
		removeFromBasket: (state, { payload }) => {
			const index = state.items.findIndex((item) => item.id === payload.id);

			let newBasket = [...state.items];

			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Cant remove product {id: ${payload.id}} as its not in basket!`
				);
			}

			state.items = newBasket;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// basket items
export const selectBasketItems = (state) => state.basket.items;

// basket total items
export const selectBasketTotal = (state) =>
	state.basket.items.reduce((total, item) => (total += item.price), 0);

// individual item
export const selectBasketItemsWithId = (state, id) =>
	state.basket.items.filter((item) => item.id === id);

export default basketSlice.reducer;
