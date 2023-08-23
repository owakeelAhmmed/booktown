// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { createSlice } from '@reduxjs/toolkit';

// interface EditBookState {
//   title: string;
//   author: string;
//   genre: string;
//   date: string;
//   imageLink: string;
//   price: string;
//   editBookId: number | null;
// }

// const initialState: EditBookState = {
//   title: '',
//   author: '',
//   genre: '',
//   date: '',
//   imageLink: '',
//   price: '',
//   editBookId: null,
// };

// const editBookSlice = createSlice({
//   name: 'editBook',
//   initialState,
//   reducers: {
//     setBookData: (state, action) => {
//       state.editBookId = action.payload;
//     },
//   },
// });

// export const { setBookData } = editBookSlice.actions;
// export default editBookSlice.reducer;

// productSlice.js

import { createSlice } from '@reduxjs/toolkit';
interface Product {
  _id: string; // Assuming _id is a string, change it to the correct type if needed
  title: string;
  author: string;
  genre: string;
  date: string;
  imageLink: string;
  price: string;
  editBookId: number | null;
  // Other properties of the product
}

// In your state
interface EditBookState {
  products: Product[];
  loading: boolean;
  error: any; // You should define an appropriate type for error
}
const initialState: EditBookState = {
  products: [],
  loading: false,
  error: null,
};

const editBookSlice = createSlice({
  name: 'updateProduct',
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateProduct(state, action) {
      const updatedProduct = action.payload;
      const index = state.products.findIndex(
        (product) => product._id === updatedProduct._id
      );
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    },
    // ... add more actions for adding, deleting, etc.
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  updateProduct,
  // ... export other actions
} = editBookSlice.actions;

export default editBookSlice.reducer;
