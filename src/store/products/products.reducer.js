import * as actions from "../constants-actions";

const initialState = {
  products: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_PRODUCTS:
      return {
        products: action.payload,
      };
    case actions.EMPTY_PRODUCTS:
      return {
        products: [],
      };
    default:
      return state;
  }
}
