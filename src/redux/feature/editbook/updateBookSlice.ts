// import { createSlice } from '@reduxjs/toolkit';

// interface Product {
//   _id: string; // Replace with the actual type of _id
//   // Other properties of your product
// }
// const initialState = {
//   products: Product[],
//   loading: false,
//   error: null,
// };

// const updateBookSlice = createSlice({
//   name: 'update',
//   initialState,
//   reducers: {
//     fetchProductsStart(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchProductsSuccess(state, action) {
//       state.loading = false;
//       state.products = action.payload;
//     },
//     fetchProductsFailure(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     updateProduct(state, action) {
//       const updatedProduct = action.payload;
//       const index = state.products.findIndex(
//         (product) => product._id === updatedProduct._id
//       );
//       if (index !== -1) {
//         state.products[index] = updatedProduct;
//       }
//     },
//   },
// });

// export const {
//   fetchProductsStart,
//   fetchProductsSuccess,
//   fetchProductsFailure,
//   updateProduct,
// } = updateBookSlice.actions;

// export default updateBookSlice.reducer;
