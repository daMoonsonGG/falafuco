import React, { Component } from "react";

import MobileLinks from "./mobile-links";

import history from "../../history";
import NavLinks from "./navlinks";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  makeItTrue = () => {
    this.setState({ isOpen: true });
  };

  makeItFalse = () => {
    this.setState({ isOpen: false });
  };
  render() {
    return (
      <div className="header">
        <div className="header__left-side">
          <div className="header__left-side__logo">
            <a onClick={() => history.push("/")}>
              <img src="https://i.imgur.com/KeqapyX.jpg" />
            </a>
          </div>
          <a
            className="header__left-side__name"
            onClick={() => history.push("/")}
          >
            Falafuco
          </a>
        </div>
        <div className="header__right-side">
          {this.state.isOpen ? (
            <MobileLinks handleClick={this.makeItFalse} />
          ) : null}
          <NavLinks />
        </div>
        <i
          onClick={this.state.isOpen ? this.makeItFalse : this.makeItTrue}
          className="fas fa-bars"
        ></i>
      </div>
    );
  }
}
export default Header;
