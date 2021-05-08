import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__line"></div>
        <div className="footer__bottom">
          <div className="footer__bottom__left-side">
            <i className="far fa-copyright"></i>
            <span>Falafuco, Inc. 2021</span>
          </div>
          <div className="footer__bottom__right-side">
            <span>Síguenos:</span>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
