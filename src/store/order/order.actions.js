import * as actions from "../constants-actions";

const setCreatedOrder = (order) => (dispatch) => {
  dispatch({
    type: actions.CREATE_ORDER,
    payload: order,
  });
};
const setFinishedOrder = (order) => (dispatch) => {
  dispatch({
    type: actions.SET_FINISHED_ORDER,
    payload: order,
  });
};

const deleteOrder = () => (dispatch) => {
  dispatch({
    type: actions.DELETE_ORDER,
  });
};

const modifyTotal = (update) => (dispatch) => {
  dispatch({
    type: actions.MODIFY_TOTAL,
    payload: update,
  });
};

export { setCreatedOrder, modifyTotal, deleteOrder, setFinishedOrder };
