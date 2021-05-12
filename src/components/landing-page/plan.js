import React, { Component } from "react";

class Plan extends Component {
  render() {
    const { className, img, title, textOne, textTwo } = this.props;
    return (
      <div className={`${className} plan`}>
        <div className="plan__img">
          <img src={img} />
        </div>
        <div className="plan__text">
          <div className="plan__text__title">{title}</div>
          <div className="plan__text__description">
            <div className="plan__text__description__text-one">{textOne}</div>
            <br />
            <div className="plan__text__description__text-two">{textTwo}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Plan;
