import React, { Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import Favourite from "./Favourite";
import Description from "./Description";

function Navbar() {
  return (
    <Fragment>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper light-green darken-1">
            <a href="#" className="brand-logo center">
              <h5>Best Food App</h5>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {/* <li>
                <Link to="/">index</Link>
              </li>
              <li>
                <Link to="/description">description</Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Favourite />
        </Route>
        <Route path="/description/:itemName">
          <Description />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default Navbar;
