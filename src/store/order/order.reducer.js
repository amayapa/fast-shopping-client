import * as actions from "../constants-actions";

const initialState = {
  order: {
    costumerData: {},
  },
  total: 0,
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case actions.DELETE_ORDER:
      return {
        order: {
          costumerData: {},
        },
        total: 0,
      };
    case actions.MODIFY_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case actions.SET_FINISHED_ORDER:
      return {
        ...state,
        order: {
          ...state.order,
          costumerData: action.payload,
        },
      };

    default:
      return state;
  }
}
