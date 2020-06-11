import ActionsVal from "./actionTypes";
const { set_order } = ActionsVal;
const OrderAction = item => {
  item.countOrder = parseInt(item.countOrder) + 1;
  return async dispatch => {
    dispatch({
      type: set_order,
      payload: item
    });
  };
};

export default OrderAction;
