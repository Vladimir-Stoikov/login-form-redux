import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/dataSlice';

export default configureStore({
  reducer: {
    base: dataReducer,
  },
});
