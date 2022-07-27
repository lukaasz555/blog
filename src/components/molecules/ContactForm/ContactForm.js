import React, { useState } from "react";
import { Wrapper, Container } from "./ContactForm.styles";
import TextareaAutosize from "react-textarea-autosize";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mailSent, setMailSent] = useState(false);

  /*  templateID: template_oszw945;
  serviceID: service_83oanad;
  publicKEY: IZhpTRSQKv9adz2W3; */

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_83oanad";
      const templateId = "template_oszw945";
      const userId = "IZhpTRSQKv9adz2W3";
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
      <Container>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id={name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Container>

      <Container>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id={email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Container>

      <Container>
        <label htmlFor="message">Your message</label>
        <TextareaAutosize
          cacheMeasurements
          value={message}
          id={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Container>
      <button onClick={submit}>SEND</button>
    </Wrapper>
  );
};

export default ContactForm;
