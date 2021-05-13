import React, { Component } from "react";

import history from "../../history";

import GreenButton from "../green-btn";

import Plan from "./plan.js";

class Plans extends Component {
  render() {
    return (
      <div className="plans">
        <div className="plans__header">
          <div className="plans__header__title">
            <span>Siempre hay un plan que se ajusta a tu proyecto</span>
          </div>
          <div className="plans__header__slogan">
            <span>Y sino personalizamos uno...</span>
          </div>
        </div>
        <div className="plans__plan-group">
          <Plan
            className="plans__plan-option"
            img="https://i.imgur.com/ktsP8Q9.jpg"
            title="Opción 1"
            textOne="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
            textTwo=" Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
          />
          <Plan
            className="plans__plan-option"
            img="https://i.imgur.com/ktsP8Q9.jpg"
            title="Opción 2"
            textOne="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
            textTwo=" Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
          />
          <Plan
            className="plans__plan-option"
            img="https://i.imgur.com/ktsP8Q9.jpg"
            title="Opción 3"
            textOne="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
            textTwo=" Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
          />
        </div>
        <GreenButton
          className="plans__btn"
          text="Saber más..."
          handleClick={() => history.push("/planes")}
        />
      </div>
    );
  }
}

export default Plans;
