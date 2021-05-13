import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput } from "./formInput";
import Button from "./white-btn";

class ContactForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form className={`${className} contact-form`} onSubmit={handleSubmit}>
        <Field
          className="contact-form__field contact-form__name"
          name="name"
          type="name"
          placeholder="Nombre"
          component={FormInput}
        />
        <Field
          className="contact-form__field contact-form__email"
          name="email"
          type="email"
          placeholder="Email"
          component={FormInput}
        />
        <Field
          className="contact-form__field contact-form__topic"
          name="topic"
          component={FormInput}
          type="text"
          placeholder="Asunto"
        />
        <Field
          className="contact-form__field contact-form__message"
          name="message"
          component="textarea"
          placeholder="Háblanos de ti, tu negocio y tus objetivos..."
        />
        <Button
          className="contact-form__btn"
          text="Enviar"
          handleClick={handleSubmit}
        />
      </form>
    );
  }
}

ContactForm = reduxForm({
  form: "ContactForm",
})(ContactForm);

export default ContactForm;
