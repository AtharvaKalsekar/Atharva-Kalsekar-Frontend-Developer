import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { CapsulesSlice } from './Capsules';

const reducer = combineReducers({
  capsules: CapsulesSlice.reducer,
});

export const store = configureStore({
  reducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
