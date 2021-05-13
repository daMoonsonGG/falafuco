import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput } from "./formInput";
import Button from "./white-btn";

import { init } from "emailjs-com";
init("user_HBmioNwXsFxWQgyRTacwT");

class ContactForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm("service_c03gtmf", "template_rl67c6t", "#myForm").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form
        id="myForm"
        className={`${className} contact-form`}
        onSubmit={handleSubmit}
      >
        <Field
          className="contact-form__field contact-form__name"
          name="name"
          type="name"
          required
          placeholder="Nombre"
          component={FormInput}
        />
        <Field
          className="contact-form__field contact-form__email"
          name="email"
          type="email"
          required
          placeholder="Email"
          component={FormInput}
        />
        <Field
          className="contact-form__field contact-form__topic"
          name="topic"
          component={FormInput}
          type="text"
          required
          placeholder="Asunto"
        />
        <Field
          className="contact-form__field contact-form__message"
          name="message"
          component="textarea"
          required
          placeholder="Háblanos de ti, tu negocio y tus objetivos..."
        />
        <Button
          className="contact-form__btn"
          text="Enviar"
          handleClick={this.handleSubmit}
        />
      </form>
    );
  }
}

ContactForm = reduxForm({
  form: "ContactForm",
})(ContactForm);

export default ContactForm;
