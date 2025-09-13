import { ADD_TO_CART , REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, LOGOUT, LOGIN_SUCCESS} from "../actions/CartActions"; 

const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
            }
        case INCREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
            };
        case DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)
            };
        default:
            return state;
    }
};


const initial_State = {
    isAuthenticated: false,
    user: null,
  };
  
const authReducer = (state = initial_State, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
            ...state,
            isAuthenticated: true,
            user: action.payload,
            };
        case 'LOGOUT':
            return {
              ...state,
              isAuthenticated: false,
              user: null,
            };
        default:
            return state;
    }
  };
  
  export { cartReducer, authReducer };