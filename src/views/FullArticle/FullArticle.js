import React from "react";
import Button from "components/atoms/Button/Button";
import Author from "components/molecules/Author/Author";
import { NavLink } from "react-router-dom";
import {
  Wrapper,
  StyledTop,
  StyledContent,
  StyledBottom,
} from "./FullArticle.styles";

const FullArticle = ({
  id,
  title,
  short,
  category,
  content,
  img = null,
  date,
  source,
}) => (
  <Wrapper>
    <StyledTop>
      <h1>{title}</h1>
      <p>{date}</p>
    </StyledTop>

    <StyledContent>
      {img ? <img src={img.url} alt={title} /> : null}
      <strong>{short}</strong>
      <p>{content}</p>
      <span>
        źródło: <a href={source}>{source}</a>
      </span>
    </StyledContent>
    <StyledBottom>
      <p>
        kategoria: <NavLink to="/category">#{category}</NavLink>
      </p>

      <NavLink to="/">
        <Button content="Back" />
      </NavLink>
    </StyledBottom>

    <Author />
  </Wrapper>
);

export default FullArticle;
