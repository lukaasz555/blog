import React from "react";
import styled from "styled-components";
/* import { articles } from "data/data"; */
import BtnReadMore from "components/atoms/BtnReadMore/BtnReadMore";

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

const Article = ({ title, short }) => {
  return (
    <StyledArticle>
      <h3>{title}</h3>
      <p>{short}</p>

      <BtnReadMore />
    </StyledArticle>
  );
};

export default Article;
