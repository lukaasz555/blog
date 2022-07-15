import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button/Button";
import { NavLink } from "react-router-dom";

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
  p {
    margin: 0.5em 0;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  /*   @media (min-width: 768px) {
    width: 75%;
  } */
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
    justify-content: flex-end;
    align-items: flex-end;
    p {
      display: inline;
    }
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin: 0;
  color: rgba(0, 0, 0, 0.8);

  &:hover {
    text-decoration: underline;
  }

  h3 {
    margin: 0;
  }
`;

const Article = ({ id, title, short, category, date }) => {
  return (
    <StyledArticle>
      <WrapperTop>
        <StyledLink to={id}>
          <h3 onClick={() => console.log(id, title)}>{title}</h3>
        </StyledLink>

        <p>{date}</p>
      </WrapperTop>
      <p>{short}</p>
      <WrapperBottom>
        <NavLink to={id}>
          <Button content={"Read more"} />
        </NavLink>
      </WrapperBottom>
    </StyledArticle>
  );
};

export default Article;
