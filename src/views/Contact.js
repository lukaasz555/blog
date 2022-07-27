import React from "react";
import styled from "styled-components";
import Input from "components/atoms/Input/Input";
import { Textarea } from "components/atoms/Textarea/Textarea";
import Button from "components/atoms/Button/Button";
import ContactForm from "components/molecules/ContactForm/ContactForm";

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  /*   background-color: rgba(0, 0, 0, 0.15); */
  /*   display: flex;
  flex-direction: column; */
  //background-color: #fab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;

const Contact = () => {
  return (
    <Wrapper>
      {/*       <Input placeholder="Your name" />
      <Input placeholder="Mail address" type="mail" />

      <Textarea placeholder="Message"></Textarea>
      <Button content={"SEND"} /> */}
      <ContactForm />
    </Wrapper>
  );
};

export default Contact;
