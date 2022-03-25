import { createSlice } from '@reduxjs/toolkit';

let sessionDate = '';

if (sessionStorage.getItem('data') !== null) {
  console.log('1', sessionStorage.getItem('data'));
  sessionDate = JSON.parse(sessionStorage.getItem('data'));
}

export const dataSlice = createSlice({
  name: 'base',
  initialState: {
    data: [sessionDate],
  },
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
      sessionStorage.setItem('data', JSON.stringify(state.data));
      console.log('data update');
      console.log(sessionStorage.getItem('data'));
    },
  },
});

export const { addData } = dataSlice.actions;

export default dataSlice.reducer;
