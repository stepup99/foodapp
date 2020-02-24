import React, { Fragment } from "react";
import uuid from "uuid/v4";
function Searchcatagories(props) {
  const myQuery = props.searchQuery.toLowerCase();
  const search = props.reduxdata.catogories.recipes;

  const mySearch = search.map(item => {
    // console.log("inside map");
    if (typeof myQuery == "string") {
      //   console.log("indie strin");
      if (item.name.toLowerCase().includes(myQuery)) {
        // return <div>{item.name}</div>;
        return (
          <div className="col s12 subItemList" key={uuid()}>
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
    }
  });

  return <Fragment>{mySearch}</Fragment>;
}

export default Searchcatagories;
