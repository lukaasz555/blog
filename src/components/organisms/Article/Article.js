import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button/Button";

const StyledArticle = styled.article`
  width: 100%;
  min-height: 200px;
  margin: 3em 0 0;
  display: flex;
  flex-direction: column;
  text-align: center;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const WrapperTop = styled.div`
  h3 {
    margin: 0;
  }

  p {
    margin: 0.5em 0;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (min-width: 768px) {
    width: 75%;
  }
`;

const WrapperBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 0 2em;

  Button {
    margin: 0;
  }

  p {
    display: none;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    p {
      display: inline;
    }
  }
`;

const Article = ({ title, short, category, date }) => {
  return (
    <StyledArticle>
      <WrapperTop>
        <h3>{title}</h3>
        <p>{date}</p>
      </WrapperTop>
      <p>{short}</p>
      <WrapperBottom>
        <p>kategoria: {category.toUpperCase()}</p>
        <Button content={"Read more"} />
      </WrapperBottom>
    </StyledArticle>
  );
};

export default Article;
