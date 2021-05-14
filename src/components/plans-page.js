import React, { Component } from "react";

import history from "../history";

import GreenButton from "./green-btn";

class PlansPage extends Component {
  render() {
    return (
      <div className="plans-page">
        <div className="plans-page__top">
          <div className="plans-page__top__title">
            <span>Planes</span>
          </div>
          <div className="plans-page__top__text">
            <span>
              In aliquet egestas purus, sed condimentum leo dignissim id. Morbi
              eu placerat augue, ut volutpat nulla. Etiam ultricies posuere
              magna vel pulvinar. Praesent scelerisque, tellus in ullamcorper
              iaculis, ex metus porta tellus, hendrerit tincidunt ipsum purus ut
              augue. Maecenas nisi ex, elementum eget congue sed, accumsan sit
              amet magna. Morbi nec tempor enim, id vestibulum lectus.{" "}
            </span>
          </div>
        </div>
        <div className="plans-page__group">
          <div className="plans-page__group__plans-names">
            <div className="plans-page__group__plans-names__basic">Básico</div>
            <div className="plans-page__group__plans-names__medium">Medio</div>
            <div className="plans-page__group__plans-names__high">Alto</div>
          </div>
          <div className="plans-page__group__features">
            <div className="plans-page__group__features__names">
              <div className="plans-page__group__names__feature-one">
                Redes Sociales
              </div>
              <div className="plans-page__group__names__feature-two">Marca</div>
              <div className="plans-page__group__names__feature-three">
                Página Web
              </div>
              <div className="plans-page__group__names__feature-four">
                Networking
              </div>
              <div className="plans-page__group__names__feature-five">
                Visibilidad Local
              </div>
              <div className="plans-page__group__feature-six">Publicidad</div>
            </div>
            <div className="plans-page__group__features__basic">
              <div className="plans-page__group__features__basic__feature-one">
                <i className="far fa-check-circle"></i>
              </div>
              <div className="plans-page__group__features__basic__feature-two">
                <i className="far fa-times-circle"></i>
              </div>
              <div className="plans-page__group__features__basic__feature-three">
                <i className="far fa-check-circle"></i>
              </div>
              <div className="plans-page__group__features__basic__feature-four">
                <i className="far fa-times-circle"></i>
              </div>
              <div className="plans-page__group__features__basic__feature-five">
                <i className="far fa-times-circle"></i>
              </div>
              <div className="plans-page__group__features__basic__feature-six">
                <i className="far fa-check-circle"></i>
              </div>
            </div>
            <div className="plans-page__group__features__medium">
              <div className="plans-page__group__features__medium__feature-one">
                <i className="far fa-check-circle"></i>
              </div>
              <div className="plans-page__group__features__medium__feature-two">
                <i className="far fa-times-circle"></i>
              </div>
              <div className="plans-page__group__features__medium__feature-three">
                <i className="far fa-check-circle"></i>
              </div>
              <div className="plans-page__group__features__medium__feature-four">
                <i className="far fa-times-circle"></i>
              </div>
              <div className="plans-page__group__features__medium__feature-five">
                <i className="far fa-times-circle"></i>
              </div>
              <div className="plans-page__group__features__medium__feature-six">
                <i className="far fa-check-circle"></i>
              </div>
            </div>
            <div className="plans-page__group__features__high">
              <div className="plans-page__group__features__high__feature-one">
                <i className="far fa-check-circle"></i>
              </div>
              <div className="plans-page__group__features__high__feature-two">
                <i className="far fa-times-circle"></i>
              </div>
              <div className="plans-page__group__features__high__feature-three">
                <i className="far fa-check-circle"></i>
              </div>
              <div className="plans-page__group__features__high__feature-four">
                <i className="far fa-times-circle"></i>
              </div>
              <div className="plans-page__group__features__high__feature-five">
                <i className="far fa-times-circle"></i>
              </div>
              <div className="plans-page__group__features__high__feature-six">
                <i className="far fa-check-circle"></i>
              </div>
            </div>
          </div>
        </div>
        <GreenButton
          className="plans-page__btn"
          text="Consúltanos"
          handleClick={() => history.push("/contacto")}
        />
      </div>
    );
  }
}

export default PlansPage;
