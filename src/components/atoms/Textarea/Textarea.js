import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
//import {Wrapper} from "../Input/Input";

const Wrapper = styled.div`
  margin: 2em 0;
  position: relative;
  min-height: 36px;
  width: 100%;

  label {
    position: absolute;
    left: 0.25em;
    top: 0.65em;
    transition: all 0.25s;
    color: rgba(175, 175, 175, 1);
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  span {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.25);
  }

  span > span {
    position: absolute;
    height: 100%;
    width: 0;
    background-color: #000;
    transition: width 0.45s;
  }

  textarea {
    font-family: "Montserrat", sans-serif;
    font-size: ${({ theme }) => theme.fontSize.s};
    resize: none;
    border: none;
    padding: 0.5em 0.25em;
    width: 100%;
    &:focus,
    &:valid {
      outline: none;
    }
    &:focus ~ span > span,
    &:valid ~ span > span {
      width: 100%;
    }

    &:focus ~ label,
    &:valid ~ label {
      top: -1.1em;
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

const Textarea = ({ id, onChange, value }) => (
  <Wrapper>
    <TextareaAutosize id={id} required onChange={onChange} value={value} />
    <label htmlFor={id}>{id}</label>
    <span>
      <span></span>
    </span>
  </Wrapper>
);

export default Textarea;
