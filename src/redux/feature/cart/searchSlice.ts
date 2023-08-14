import { createSlice } from '@reduxjs/toolkit';

interface IBook {
  title: string;
  author: string;
  genre: string;
  year: number;
}

interface ISearch {
  books: IBook[];
  searchTerm: string;
  selectedGenre: string;
  selectedYear: string;
}

const initialState: ISearch = {
  books: [],
  searchTerm: '',
  selectedGenre: '',
  selectedYear: '',
};

const searchSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setGenreFilter: (state, action) => {
      state.selectedGenre = action.payload;
    },
    setYearFilter: (state, action) => {
      state.selectedYear = action.payload;
    },
  },
});

export const { setSearchTerm, setGenreFilter, setYearFilter } =
  searchSlice.actions;

export default searchSlice.reducer;
