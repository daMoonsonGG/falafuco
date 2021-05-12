import React, { Component } from "react";

import Videoframe from "./videoFrame";
import Presentation from "./presentation";
import Services from "./services";
import Plans from "./plans";
import Questions from "./questions";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Videoframe />
        <Presentation />
        <Services />
        <Plans />
        <Questions />
      </div>
    );
  }
}

export default Landing;
