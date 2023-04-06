import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const newCartList = state.products.concat(action.payload.productData);
      return { ...state, products: newCartList };
    }
    case REMOVE_PRODUCT: {
      const newCartList = state.products.filter(prod => prod.id !== action.payload.id);
      return { ...state, products: newCartList };
    }
    default:
      return state;
  }
};
