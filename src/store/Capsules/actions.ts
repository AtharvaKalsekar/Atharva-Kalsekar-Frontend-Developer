import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCapsules = createAsyncThunk<{ capsules: any[] }>(
  "fetchCapsules",
  async () => {
    return {
      capsules: [],
    };
  }
);
