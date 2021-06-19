import * as actions from "../constants-actions";

const setAllProducts = (products) => (dispatch) => {
  dispatch({
    type: actions.SET_PRODUCTS,
    payload: products,
  });
};
const emptyProducts = () => (dispatch) => {
  dispatch({
    type: actions.EMPTY_PRODUCTS,
  });
};

export { setAllProducts, emptyProducts };
