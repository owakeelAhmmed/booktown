import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookSearch: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.bookSearch = action.payload;
    },
    clearSearch: (state) => {
      state.bookSearch = '';
    },
  },
});

export const { setSearchQuery, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
