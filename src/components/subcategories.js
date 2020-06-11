import React, { Fragment, memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OrderAction from "../actions/orderAction";
const Subcategories = props => {
  const data = props.data.catogories.recipes;
  const selectProp = props.selectProp;
  var getSelectRecepie = "";
  const dispatch = useDispatch();
  const orderCouter = useSelector(state => {
    return state;
  });

  function orderFn(item, index) {
    dispatch(OrderAction(item));
    console.log("orderCouter>>>>>>>>>>>>>>>>>>>   ");
    console.log(orderCouter.catogories.recipes[index].countOrder);
    const counter_index = orderCouter.catogories.recipes[index].countOrder;
    setCount(counter_index);
  }
 
  if (data) {
    const datgetSelectRecepie = data.filter(item =>
      selectProp !== "" ? selectProp == item.category : item
    );

    if (datgetSelectRecepie.length > 0) {
      getSelectRecepie = datgetSelectRecepie.map((item, index) => {
        const [getCount+"_"+index,setCount+"_"+index] = useState(0);
        return (
          <div className="col s12 subItemList" key={item.item_id}>
            <div className="col s12">
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <Link to={`/description/${item.name}`}>
                    <img className="activator" src={item.image} />
                  </Link>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    {item.name}-------{getCount}
                  </span>
                  <p>
                    <a href="#">This is a link</a>
                  </p>
                  <a
                    className="waves-effect waves-light btn-small"
                    onClick={() => {
                      orderFn(item, index);
                    }}
                  >
                    <i className="material-icons left">cloud</i>ADD TO BAG
                  </a>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Card Title<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="col s12 subItemList">
          <div className="col s12">
            <div className="card">
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  <p>This catagory is not available.</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  return <Fragment>{getSelectRecepie}</Fragment>;
};

export default memo(Subcategories);
