import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5em 1em;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.blue};
  border: 1.5px solid ${({ theme }) => theme.colors.blue};
  border-radius: 16px;
  background: transparent;
  margin: 0.5em 1em;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
    transform: scale(1.2);
  }
`;

const CategoryButton = ({ itemName, onClick }) => (
  <StyledButton onClick={onClick}>{itemName}</StyledButton>
);

export default CategoryButton;
