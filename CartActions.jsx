export const ADD_TO_CART= 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const LOGIN_SUCCESS='LOGIN_SUCCESS';
export const LOGOUT='LOGOUT';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (product) => ({
    type: REMOVE_FROM_CART,
    payload: product,
});

export const increaseQuantity = (productId) => ({
    type: INCREASE_QUANTITY,
    payload: { id: productId }
});

export const decreaseQuantity = (productId) => ({
    type: DECREASE_QUANTITY,
    payload: { id: productId }
});

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const logout = () => ({
    type: 'LOGOUT',
  });