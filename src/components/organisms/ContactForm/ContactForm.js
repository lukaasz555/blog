import React, { useState } from "react";
import { Wrapper } from "./ContactForm.styles";
import emailjs from "emailjs-com";
import SendButton from "components/atoms/SendButton/SendButton";
import Input from "components/atoms/Input/Input";
import Textarea from "components/atoms/Textarea/Textarea";
import Button from "components/atoms/Button/Button";

const serviceId = "service_83oanad";
const templateId = "JDblog";
const userId = `${process.env.REACT_APP_EMAILJS_KEY}`;

const validate = (form) => {
  if (!form.name) {
    return "Name is required!";
  } else if (form.name.length < 3) {
    return "Name should contain at least 3 characters.";
  }

  if (!form.email) {
    return "Email is required!";
  } else if (
    !form.email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    return "Incorrect email address.";
  }

  if (!form.message) {
    return "Type your message!";
  } else if (form.message.length < 20) {
    return "Message should contain at least 20 characters.";
  }

  return null;
};

const formShape = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(formShape);
  const [error, setError] = useState("");
  const [isEmailSent, setEmailSent] = useState(false);

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const sendMail = (form) => {
    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((res) => {
        console.log(res);
        setEmailSent(true);
      })
      .catch((err) => setError(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorInfo = validate(form);
    if (errorInfo) {
      setError(errorInfo);
      console.log(errorInfo);
      return;
    } else {
      sendMail(form);
      setError("");
    }
    setForm(formShape);
  };

  return (
    <Wrapper>
      <Input
        placeholder="name"
        id="name"
        type="text"
        value={form.name}
        onChange={handleInput}
      />
      <Input id="email" type="text" value={form.email} onChange={handleInput} />
      <Textarea id="message" value={form.message} onChange={handleInput} />

      {error ? <p className="errorInfo">{error}</p> : ""}

      {!isEmailSent ? (
        <SendButton onClick={handleSubmit} />
      ) : (
        <Button
          content={"Thanks for your message!"}
          onClick={() => setEmailSent(false)}
        />
      )}
    </Wrapper>
  );
};

export default ContactForm;
