import React from "react";
import styled from "styled-components";
import Input from "components/atoms/Input/Input";
import Label from "components/atoms/Label/Label";

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 300px;
  min-height: 36px;
  margin: 2em 0;
  //border: 1px solid red;
`;

const StyledSpan = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const InputContainer = ({ id }) => (
  <StyledContainer>
    <Input id={id} type="text"></Input>
    <Label name={id} />
    <StyledSpan>
      <span></span>
    </StyledSpan>
  </StyledContainer>
);

export default InputContainer;
