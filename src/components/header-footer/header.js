import React, { Component } from "react";
import { Link } from "react-scroll";

import history from "../../history";

class Header extends Component {
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
          <Link
            to="services"
            smooth={true}
            duration={1000}
            offset={-100}
            className="header__right-side__servicios"
            onClick={() => history.push("/")}
          >
            Servicios
          </Link>
          <a
            className="header__right-side__planes"
            onClick={() => history.push("/planes")}
          >
            Planes
          </a>
          <a
            className="header__right-side__contacto"
            onClick={() => history.push("/contacto")}
          >
            Contacto
          </a>
        </div>
      </div>
    );
  }
}
export default Header;
