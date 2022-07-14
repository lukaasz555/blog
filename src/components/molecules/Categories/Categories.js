import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  padding-bottom: 1.25em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const StyledButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xs};
  border: 1px solid;
  margin: 0.5em 1em;
  padding: 8px 16px;
  border-radius: 25px;
  cursor: pointer;
  transition: color 0.25s, background-color 0.25s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Categories = ({ articles, onClick }) => {
  return (
    <Wrapper>
      {articles.map((art) => {
        return (
          <StyledButton key={art.id} onClick={onClick}>
            #{art.category}
          </StyledButton>
        );
      })}
    </Wrapper>
  );
};

export default Categories;
