import React, { Component } from "react";

import Videoframe from "./video-frame";
import Presentation from "./presentation";
import Services from "./services";
import Questions from "./questions";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Videoframe />
        <Presentation />
        <Services />
        <Questions />
      </div>
    );
  }
}

export default Landing;
