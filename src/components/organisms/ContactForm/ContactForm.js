import React, { useState } from "react";
import { Wrapper } from "./ContactForm.styles";
import emailjs from "emailjs-com";
import SendButton from "components/atoms/SendButton/SendButton";
import Input from "components/atoms/Input/Input";
import Textarea from "components/atoms/Textarea/Textarea";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mailSent, setMailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_83oanad";
      const templateId = "JDblog";
      const userId = `${process.env.REACT_APP_EMAILJS_KEY}`;
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      setName("");
      setEmail("");
      setMessage("");
      setMailSent(true);
    } else {
      alert("Fill all fields, please.");
    }
  };

  return (
    <Wrapper>
      <Input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        id="Email address"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <SendButton onClick={submit} />
    </Wrapper>
  );
};

export default ContactForm;
