import React from "react";
import styled from "styled-components";
import Input from "components/atoms/Input/Input";
import { Textarea } from "components/atoms/Textarea/Textarea";
import BtnReadMore from "components/atoms/BtnReadMore/BtnReadMore";

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  /*   background-color: rgba(0, 0, 0, 0.15); */
  /*   display: flex;
  flex-direction: column; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;

const Contact = () => {
  return (
    <Wrapper>
      <p>coming soon</p>

      <Input placeholder="Your name" />
      <Input placeholder="Mail address" type="mail" />

      <Textarea placeholder="Message"></Textarea>
      <BtnReadMore />
    </Wrapper>
  );
};

export default Contact;
