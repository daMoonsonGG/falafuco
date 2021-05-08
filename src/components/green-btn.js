import React, { Component } from "react";

class GreenButton extends Component {
  render() {
    const { className, text, handleClick } = this.props;
    return (
      <div className={`${className} green-btn`}>
        <button onClick={handleClick}>{text}</button>
      </div>
    );
  }
}

export default GreenButton;
