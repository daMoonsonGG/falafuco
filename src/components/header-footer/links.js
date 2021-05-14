import React, { Component } from "react";
import { Link } from "react-scroll";

import history from "../../history";

class Links extends Component {
  render() {
    return (
      <div className="header__right-side">
        <Link
          to="services"
          smooth={true}
          duration={1000}
          offset={-100}
          className="links__servicios"
          onClick={() => history.push("/")}
        >
          Servicios
        </Link>
        <a className="links__planes" onClick={() => history.push("/planes")}>
          Planes
        </a>
        <a
          className="links__contacto"
          onClick={() => history.push("/contacto")}
        >
          Contacto
        </a>
      </div>
    );
  }
}
export default Links;
