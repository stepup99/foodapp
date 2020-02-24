import React, { Fragment, memo } from "react";
import uuid from "uuid/v4";
function ScrollCategories(props) {
  const collectFavourite = props.collectFavourite;
  var catagoryDataFavourite = "";
  if (collectFavourite) {
    catagoryDataFavourite = collectFavourite
      .filter(catagory => catagory.isFavourite == true)
      .map(catagory => {
        return (
          <div className="col m4 l4 s12 boxCard" key={uuid()}>
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={catagory.image}></img>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  <h6>{catagory.name}</h6>
                  <i className="material-icons right">more_vert</i>
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
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              </div>
            </div>
          </div>
        );
      });
  }
  return <Fragment>{catagoryDataFavourite}</Fragment>;
}

export default memo(ScrollCategories);
