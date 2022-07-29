import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 2em 0;
  position: relative;
  min-height: 36px;
  width: 100%;
  span {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.25);
  }

  input {
    width: 100%;
    border: none;
    background: transparent;
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 0.5em 0.25em;
    &:focus {
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

  label {
    position: absolute;
    left: 0.25em;
    top: 0.65em;
    transition: all 0.25s;
    color: rgba(175, 175, 175, 1);
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  span > span {
    position: absolute;
    height: 100%;
    width: 0;
    background-color: #000;
    transition: width 0.45s;
  }
`;

const TestInput = ({ id, type, onChange, value }) => (
  <Wrapper>
    <input id={id} type={type} value={value} required onChange={onChange}>
      {/*       {value} */}
    </input>
    <label htmlFor={id}>{id}</label>
    <span>
      <span></span>
    </span>
  </Wrapper>
);

export default TestInput;
