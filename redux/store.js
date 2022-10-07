import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './Features/basketSlice';
import resturantReducer from './Features/resturantSlice';

export const store = configureStore({
	reducer: {
		basket: basketReducer,
		resturants: resturantReducer,
	},
});
