import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		count: 0,
	},
	reducers: {
		increment: state => ({ count: state.count + 1 }),
		decrement: state => ({ count: state.count - 1 }),
	},
});

export const { increment, decrement } = counterSlice.actions;

export default configureStore({
	reducer: counterSlice.reducer,
});
