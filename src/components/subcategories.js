import React, { Fragment, memo } from "react";
import uuid from "uuid/v4";
import { Link } from "react-router-dom";
const Subcategories = props => {
  const data = props.data.catogories.recipes;
  const selectProp = props.selectProp;
  var getSelectRecepie = "";
  if (data) {
    const datgetSelectRecepie = data.filter(item =>
      selectProp !== "" ? selectProp == item.category : item
    );

    if (datgetSelectRecepie.length > 0) {
      getSelectRecepie = datgetSelectRecepie.map(item => {
        return (
          <div className="col s12 subItemList" key={uuid()}>
            <div className="col s12">
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <Link to={`/description/${item.name}`}>
                    <img className="activator" src={item.image} />
                  </Link>
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
