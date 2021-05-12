import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput } from "./formInput";

class ContactForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          type="text"
          placeholder="Nombre"
          component={FormInput}
        />
        <Field
          name="email"
          type="text"
          placeholder="Email"
          component={FormInput}
        />
        <Field
          name="topic"
          component={FormInput}
          type="text"
          placeholder="Asunto"
        />
        <Field
          name="notes"
          component="textarea"
          placeholder="Háblanos de ti, tu negocio y tus objetivos..."
        />
      </form>
    );
  }
}

ContactForm = reduxForm({
  form: "ContactForm",
})(ContactForm);

export default ContactForm;
