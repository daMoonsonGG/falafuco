import React, { Component } from "react";

class Button extends Component {
  render() {
    const { className, text, handleClick } = this.props;
    return (
      <div className={`${className} btn`}>
        <button onClick={handleClick}>{text}</button>
      </div>
    );
  }
}

export default Button;
