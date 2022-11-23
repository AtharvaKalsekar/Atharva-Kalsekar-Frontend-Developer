import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';

import { LoadingStages } from '../types';
import { fetchCapsules } from './actions';
import { CapsulesState } from './types';

const initialState: CapsulesState = {
  capsules: [],
  loading: LoadingStages.IDLE,
};

export const CapsulesSlice = createSlice({
  name: "Capsules",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CapsulesState>) => {
    builder.addCase(fetchCapsules.fulfilled, (state, action) => {
      state.capsules = action.payload.capsules;
      state.loading = LoadingStages.SUCCEEDED;
    });
    builder.addCase(fetchCapsules.pending, (state) => {
      state.capsules = state.capsules ?? [];
      state.loading = LoadingStages.PENDING;
    });
    builder.addCase(fetchCapsules.rejected, (state) => {
      state.capsules = state.capsules ?? [];
      state.loading = LoadingStages.FAILED;
    });
  },
});
