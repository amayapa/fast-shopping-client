import * as actions from "../constants-actions";

const setCreatedOrderline = (orderline) => (dispatch) => {
  dispatch({
    type: actions.ADD_PRODUCT_TO_CART,
    payload: orderline,
  });
};

const deleteCartProduct = (orderlineId) => (dispatch) => {
  dispatch({
    type: actions.DELETE_CART_ITEM,
    payload: orderlineId,
  });
};

const updateCartProduct = (update) => (dispatch) => {
  dispatch({
    type: actions.UPDATE_CART_PRODUCT,
    payload: update,
  });
};

const emptyCart = () => (dispatch) => {
  dispatch({
    type: actions.EMPTY_CART,
  });
};

export { setCreatedOrderline, updateCartProduct, deleteCartProduct, emptyCart };
