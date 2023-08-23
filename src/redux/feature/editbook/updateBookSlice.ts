// productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const updateBookSlice = createSlice({
  name: 'update',
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
} = updateBookSlice.actions;

export default updateBookSlice.reducer;
