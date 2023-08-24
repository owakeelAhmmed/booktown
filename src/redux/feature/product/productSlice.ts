import { IProduct } from '@/types/globalTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  products: IProduct[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    deleteProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
    },
  },
});

export const { deleteProduct } = productSlice.actions;
export default productSlice.reducer;
