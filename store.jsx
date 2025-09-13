import { configureStore } from '@reduxjs/toolkit';

import { cartReducer, authReducer } from './Reducers/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;