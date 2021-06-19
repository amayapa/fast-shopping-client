import * as actions from "../constants-actions";

const initialState = {
  cart: [],
};

export default function orderlineReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case actions.DELETE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((e) => e?.productsId !== action.payload),
      };
    case actions.UPDATE_CART_PRODUCT:
      return {
        ...state,
        cart: action.payload,
      };
    case actions.EMPTY_CART:
      return {
        cart: [],
      };
    default:
      return state;
  }
}
