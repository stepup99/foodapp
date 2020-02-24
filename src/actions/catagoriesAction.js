import axios from "axios";
const CatagoriesAction = () => {
  return async dispatch => {
    const response = await axios.get("https://temp.dash.zeta.in/food.php");
    const responseResult = response.data;

    dispatch({
      type: "GET_CATOGORIES",
      payload: responseResult
    });
  };
};

export default CatagoriesAction;
