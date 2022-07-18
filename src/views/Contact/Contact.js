import React from "react";
import Input from "components/atoms/Input/Input";
import { Textarea } from "components/atoms/Textarea/Textarea";
import Button from "components/atoms/Button/Button";
import { Wrapper } from "./Contact.styles";

const Contact = () => {
  return (
    <Wrapper>
      <Input placeholder="Your name" />
      <Input placeholder="Mail address" type="mail" />

      <Textarea placeholder="Message"></Textarea>
      <Button content={"SEND"} />
    </Wrapper>
  );
};

export default Contact;
