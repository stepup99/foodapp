import ActionsVal from "../actions/actionTypes";
const { get_catogories, set_order } = ActionsVal;
const catogoriesReducers = (state = [], action) => {
  switch (action.type) {
    case get_catogories:
      return action.payload;
    case set_order:
      console.log("set_order" + set_order);
      console.log(state);
      console.log(action.payload.countOrder);
      state.recipes.map(item => {
        if (item.item_id == action.payload.item_id) {
          item.countOrder = action.payload.countOrder;
        }
      });
      console.log("?????????>>>>>>>>>>>>>");
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default catogoriesReducers;
