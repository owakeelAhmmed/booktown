import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './feature/cart/cartSlice';
import { api } from './api/apiSlice';
import userReducer from './feature/user/userSlice';
import searchReducer from './feature/bookSearch/searchSlice';
import updateReducer from './feature/editbook/updateBookSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    update: updateReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
