import React, { useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CatagoriesAction from "../actions/catagoriesAction";
function Description() {
  const callDispatch = useDispatch();
  const getData = useSelector(state => {
    return state;
  });

  useEffect(() => {
    callDispatch(CatagoriesAction());
  }, []);

  let { itemName } = useParams();
  const singleDate = getData.catogories.recipes;
  var renderData = "";
  if (singleDate) {
    renderData = singleDate.map(item => {
      if (item.name == itemName) {
        return (
          <div className="col s12 subItemList">
            <div className="col s12">
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={item.image} />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    {item.name}
                  </span>
                  <p>
                    <a href="#">This is a link</a>
                  </p>
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
      }
    });
  }
  return <Fragment>{renderData}</Fragment>;
}

export default Description;
