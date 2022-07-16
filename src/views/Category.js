import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Article from "components/organisms/Article/Article";
import Loader from "components/atoms/Loader";
import { array } from "prop-types";

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
  let categories = [];
  /*   articles.filter(
    (item) =>
      !categories.includes(item.category) && categories.push(item.category)
  ); */

  setTimeout(
    articles.filter(
      (item) =>
        !categories.includes(item.category) && categories.push(item.category)
    ),
    100
  );

  const [filteredCategories, setFilteredCategories] = useState([]);

  const handleFilter = (e) => {
    if (articles) {
      const filteredArts = articles.filter(
        (art) => art.category === e.target.textContent
      );
      setFilteredCategories(filteredArts);
    }
  };

  console.log(categories);

  return (
    <Wrapper>
      {articles && (
        <>
          <StyledTop>
            <h1>Wybierz kategorię:</h1>
            {/*             {articles.map((item) => (
              <button
                key={item.id}
                onClick={handleFilter}
              >
                {item.category}
              </button>
            ))} */}
            {categories.map((item) => (
              <button key={item} onClick={handleFilter}>
                {item}
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
