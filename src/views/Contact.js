import React from "react";
import styled from "styled-components";
import Input from "components/atoms/Input/Input";
import { Textarea } from "components/atoms/Textarea/Textarea";
import Button from "components/atoms/Button/Button";

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  Button {
    align-self: center;
  }
`;

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
