import React, { useState, useEffect, Fragment, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import CatagoriesAction from "../actions/catagoriesAction";
import Subcategories from "./subcategories";
import Searchcatagories from "./searchcatagories";
import ScrollCategories from "./scrollcategories";
import uuid from "react-uuid";

function Favourite() {
  const [getSubState, setSubState] = useState("");
  const [toggleComponent, seToggleComponent] = useState(true);
  const [getSearch, setSearch] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CatagoriesAction());
  }, []);

  const data = useSelector(state => {
    return state;
  });

  const collectFavourite = data.catogories.recipes;

  function subCategoriesFn(data) {
    setSubState(data);
    console.log("this subcatogoroes click");
  }
  function changeHangle(e) {
    if (e.length > 0) {
      seToggleComponent(false);
      setSearch(e);
    } else {
      seToggleComponent(true);
    }
  }
  const collectData = data.catogories.categories;
  var catagoryData = "";
  if (collectData) {
    catagoryData = collectData.map(catagory => {
      return (
        <div
          className="col s1 subcategories"
          key={uuid()}
          onClick={() => subCategoriesFn(catagory.name)}
        >
          <div className="row">
            <div className="col s6 subcategoriesImg">
              <img src={catagory.image} />
            </div>
            <div className="col s6">{catagory.name}</div>
          </div>
        </div>
      );
    });
  }

  return (
    <Fragment>
      <div className="favouriteTop">
        <div className="row">
          <div className="col s6">
            <p>FAVOURITE</p>
            <p>Enjoy what you have been ordering!</p>
          </div>
          <div className="col s6">
            <i className="small material-icons">shopping_basket</i>
          </div>
        </div>
        <div className="row makeScroll">
          <ScrollCategories collectFavourite={collectFavourite} />
        </div>
        <div className="divider"></div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input
                  onChange={e => {
                    changeHangle(e.target.value);
                  }}
                  id="icon_prefix"
                  type="text"
                  className="validate"
                  placeholder="Search"
                />
                <label htmlFor="icon_prefix"></label>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col s6">
            <p>SELECT CATEGORIES</p>
          </div>
          <div className="col s6">
            <p>
              <span>FILTER</span>
              <span>
                <i className="material-icons">line_style</i>
              </span>
            </p>
          </div>
        </div>
        <div className="row categories">{catagoryData}</div>
        <div className="row itemList">
          {toggleComponent && (
            <Subcategories data={data} selectProp={getSubState} />
          )}
          {!toggleComponent && (
            <Searchcatagories reduxdata={data} searchQuery={getSearch} />
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default memo(Favourite);
