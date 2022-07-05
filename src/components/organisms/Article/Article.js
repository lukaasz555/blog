import React from "react";
import styled from "styled-components";
/* import { articles } from "data/data"; */
import Button from "components/atoms/Button/Button";

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

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;

  h3 {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    transition: all 0.2s;
  }

  p:hover {
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
  }
`;

const Article = ({ title, short, category }) => {
  return (
    <StyledArticle>
      <TopWrapper>
        <h3>{title}</h3>
        <p>#{category}</p>
      </TopWrapper>
      <p>{short}</p>
      <Button content={"Read more"} />
    </StyledArticle>
  );
};

export default Article;
