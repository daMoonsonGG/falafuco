import React, { Component } from "react";

import history from "../../history";

import GreenButton from "../green-btn";

class Questions extends Component {
  render() {
    return (
      <div className="questions">
        <div className="questions__question">
          <span>
            ¿Aún tienes alguna duda? ¿Estás listo para volver a soñar con tu
            negocio? ¡Adelante!
          </span>
        </div>
        <GreenButton
          className="questions__btn"
          text="Contáctanos"
          handleClick={() => history.push("/contacto")}
        />
      </div>
    );
  }
}

export default Questions;
