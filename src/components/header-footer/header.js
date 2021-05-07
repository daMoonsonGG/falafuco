import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a className="header__left-side">
          <div className="header__left-side__logo">
            <img src="https://i.imgur.com/KeqapyX.jpg" />
          </div>
          <div className="header__left-side__name">Falafuco</div>
        </a>
        <div className="header__right-side">
          <a className="header__right-side__servicios">Servicios</a>
          <a className="header__right-side__planes">Planes</a>
          <a className="header__right-side__contacto">Contacto</a>
        </div>
      </div>
    );
  }
}
export default Header;
