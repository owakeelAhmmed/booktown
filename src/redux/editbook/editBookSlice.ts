/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

interface EditBookState {
  title: string;
  author: string;
  genre: string;
  date: string;
  imageLink: string;
  price: string;
  editBookId: number | null;
}

const initialState: EditBookState = {
  title: '',
  author: '',
  genre: '',
  date: '',
  imageLink: '',
  price: '',
  editBookId: null,
};

const editBookSlice = createSlice({
  name: 'editBook',
  initialState,
  reducers: {
    setBookData: (state, action) => {
      state.editBookId = action.payload;
    },
  },
});

export const { setBookData } = editBookSlice.actions;
export default editBookSlice.reducer;
