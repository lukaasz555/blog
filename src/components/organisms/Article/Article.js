import React from "react";
import styled from "styled-components";
/* import { articles } from "data/data"; */

const StyledArticle = styled.article`
  width: 100%;
  min-height: 200px;
  margin: 15px 0;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }
`;

const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  border: 2px solid;
  font-weight: 600;
  letter-spacing: 2px;
  position: relative;
  align-self: flex-end;
  margin: 30px 50px 30px 0;
  border-radius: 4px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%;
    background-color: transparent;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.5s;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const Article = ({ title, short, key }) => (
  <StyledArticle>
    <h3>{title}</h3>
    <p> {short}</p>
    <StyledButton>read more</StyledButton>
  </StyledArticle>
);

export default Article;
