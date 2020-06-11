import axios from "axios";
import uuid from "uuid";
import ActionsVal from "./actionTypes";
const { get_catogories } = ActionsVal;
const CatagoriesAction = () => {
  return async dispatch => {
    const response = await axios.get("https://temp.dash.zeta.in/food.php");
    const responseResult = response.data;
    console.log(responseResult);
    responseResult.recipes.map(item => {
      item.item_id = uuid();
      item.countOrder = 0;
    });
    // console.log("heheh gegeg");
    // console.log(responseResult);
    dispatch({
      type: get_catogories,
      payload: responseResult
    });
  };
};

export default CatagoriesAction;
