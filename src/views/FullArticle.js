import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button/Button";
import Author from "components/molecules/Author/Author";

const Wrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.8);
  width: 90%;
  margin: 0 auto;
`;

const StyledTop = styled.div`
  h1 {
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const StyledContent = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin: 0 0 2em;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.35);
  }
`;

const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 5em 0 2em;

  p {
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
  }

  a {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;
  }

  Button {
    margin: 0;
  }
`;

const FullArticle = ({
  id,
  title,
  short,
  category,
  content,
  image = null,
  date,
}) => (
  <Wrapper>
    <StyledTop>
      <h1>{title}</h1>
      <p>{date}</p>
    </StyledTop>

    <StyledContent>
      {image ? <img src={image.url} alt={title} /> : null}
      <strong>{short}</strong>
      <p>{content}</p>
    </StyledContent>
    <StyledBottom>
      <p>
        kategoria: <a href="/category">#{category}</a>
      </p>

      <a href="/">
        <Button content="Back" />
      </a>
    </StyledBottom>

    <Author />
  </Wrapper>
);

export default FullArticle;
