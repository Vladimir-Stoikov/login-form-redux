import { createSlice } from '@reduxjs/toolkit';

let sessionDate = sessionStorage.getItem('data') !== null ? JSON.parse(sessionStorage.getItem('data')) : '';

export const dataSlice = createSlice({
  name: 'base',
  initialState: {
    data: [...sessionDate],
  },
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
      sessionStorage.setItem('data', JSON.stringify(state.data));
    },
    updateData: (state, action) => {
      state.data = action.payload;
      sessionStorage.setItem('data', JSON.stringify(state.data));
    },
  },
});

export const { addData, updateData } = dataSlice.actions;

export default dataSlice.reducer;
