import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Article from "components/organisms/Article/Article";
import Loader from "components/atoms/Loader";

const Wrapper = styled.div`
  width: 90%;
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;

  h1 {
    width: 100%;
    text-align: center;
  }
  button {
    padding: 0.5em 1em;
    color: ${({ theme }) => theme.colors.blue};
    border: 1px solid;
    border-radius: 16px;
    background: transparent;
    margin: 0.5em 1em;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.blue};
      border-color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

const Category = ({ articles }) => {
  const [filteredCategories, setFilteredCategories] = useState([]);

  const filterCategories = (e) => {
    if (articles) {
      const filteredArts = articles.filter(
        (art) => art.category === e.target.textContent
      );
      setFilteredCategories(filteredArts);
    }
  };

  return (
    <Wrapper>
      {articles && (
        <>
          <StyledTop>
            <h1>Kategorie wpisów:</h1>
            {articles.map((art) => (
              <button key={art.id} onClick={filterCategories}>
                {art.category}
              </button>
            ))}
          </StyledTop>

          {filteredCategories &&
            filteredCategories.map((art) => (
              <Article
                title={art.title}
                short={art.short}
                category={art.category}
                date={art.date}
                key={art.id}
                id={art.id}
              />
            ))}
        </>
      )}
    </Wrapper>
  );
};

export default Category;
