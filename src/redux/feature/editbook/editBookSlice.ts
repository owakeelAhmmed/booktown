import { createSlice } from '@reduxjs/toolkit';
interface Product {
  _id: string;
  title: string;
  author: string;
  genre: string;
  date: string;
  imageLink: string;
  price: string;
  editBookId: number | null;
}

interface EditBookState {
  products: Product[];
  loading: boolean;
  error: any;
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
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  updateProduct,
} = editBookSlice.actions;

export default editBookSlice.reducer;
