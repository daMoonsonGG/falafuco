import React, { Component } from "react";

import history from "../../history";

import Button from "../white-btn";

class Videoframe extends Component {
  render() {
    return (
      <div className="video-frame">
        <video className="video-frame__video">
          <source />
        </video>
        <div className="video-frame__over-video">
          <div className="video-frame__over-video__slogan">
            Nos adaptamos a tus necesidades.
          </div>
          <Button
            className="video-frame__over-video__btn"
            text="Planes"
            handleClick={() => history.push("/planes")}
          />
        </div>
      </div>
    );
  }
}

export default Videoframe;
