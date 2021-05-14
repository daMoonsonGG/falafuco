import React, { Component } from "react";

import Links from "./links";

class MobileLinks extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div className="mobile-links">
        <Links handleClick={handleClick} />
      </div>
    );
  }
}

export default MobileLinks;
