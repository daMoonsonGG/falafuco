import React, { Component } from "react";

import history from "../history";

import Plan from "./landing-page/plan";
import GreenButton from "./green-btn";

class PlansPage extends Component {
  render() {
    return (
      <div className="plans-page">
        <div className="plans-page__title">
          <span>Planes</span>
        </div>
        <div className="plans-page__text">
          <span>
            In aliquet egestas purus, sed condimentum leo dignissim id. Morbi eu
            placerat augue, ut volutpat nulla. Etiam ultricies posuere magna vel
            pulvinar. Praesent scelerisque, tellus in ullamcorper iaculis, ex
            metus porta tellus, hendrerit tincidunt ipsum purus ut augue.
            Maecenas nisi ex, elementum eget congue sed, accumsan sit amet
            magna. Morbi nec tempor enim, id vestibulum lectus.{" "}
          </span>
        </div>
        <div className="plans-page__group">
          <Plan
            className="plans-page__group__plan-option non-featured"
            img="http://via.placeholder.com/350x220"
            title="Opción 1"
            textOne="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
            textTwo=" Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
          />
          <Plan
            className="plans-page__group__plan-option featured"
            img="http://via.placeholder.com/400x264"
            title="Opción 2"
            textOne="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
            textTwo=" Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
          />
          <Plan
            className="plans-page__group__plan-option non-featured"
            img="http://via.placeholder.com/350x220"
            title="Opción 3"
            textOne="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
            textTwo=" Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
          />
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
