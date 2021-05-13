import React, { Component } from "react";

import ContactForm from "./contact-form";

class Contact extends Component {
  onSubmit = (fields) => {
    event.preventDefault();
    console.log(fields);
  };
  render() {
    return (
      <div className="contact">
        <div className="contact__top">
          <div className="contact__top__title">
            <span>Contacto</span>
          </div>
          <div className="contact__top__text">
            <span>Nos encantaría conocer tu historia y la de tu negocio.</span>
          </div>
        </div>
        <div className="contact__bottom">
          <div className="contact__bottom__information">
            <div className="contact__bottom__information__phone">
              <i className="fas fa-phone-volume"></i>
              666-666-666
            </div>
            <div className="contact__bottom__information__email">
              <i className="far fa-envelope"></i>
              hola@falafuco.es
            </div>
          </div>
          <div className="contact__bottom__form">
            <ContactForm
              className="contact__bottom__form__form"
              handleSubmit={this.onSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
