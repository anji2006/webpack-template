import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    randomIncrement: (state) => state + Math.ceil(Math.random() * 10),
  },
});
// console.log('##### this is counter slice', counterSlice);
export const {increment, decrement, randomIncrement} = counterSlice.actions;
export default counterSlice.reducer;
