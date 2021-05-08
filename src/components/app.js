import React, { Component } from "react";

import Header from "./header-footer/header";
import Videoframe from "./landing-page/video-frame";
import Presentation from "./landing-page/presentation";
import Services from "./landing-page/services";
import Questions from "./landing-page/questions";
import Footer from "./header-footer/footer";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Videoframe />
        <Presentation />
        <Services />
        <Questions />
        <Footer />
      </div>
    );
  }
}
