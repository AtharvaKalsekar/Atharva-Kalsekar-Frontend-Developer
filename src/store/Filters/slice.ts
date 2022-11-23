import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Filters, FiltersState, PayLoad } from './types';

const initialState: FiltersState = {
  [Filters.STATUS]: [],
  [Filters.ORIGINAL_LAUNCH]: [],
  [Filters.TYPE]: [],
};

export const FiltersSlice = createSlice({
  name: "Filters",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<PayLoad>) => {
      state[action.payload.filterType] = [...action.payload.filterOptions];
    },
    clearAllFilters: (state) => {
      state = initialState;
    },
  },
});

export const { setFilters, clearAllFilters } = FiltersSlice.actions;
