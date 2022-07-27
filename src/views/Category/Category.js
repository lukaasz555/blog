import React, { useEffect, useState } from "react";
import Article from "components/organisms/Article/Article";
import { Wrapper, StyledTop } from "./Category.styles";

const Category = ({ articles }) => {
  let categories = [];

  setTimeout(
    articles.filter(
      (item) =>
        !categories.includes(item.category) && categories.push(item.category)
    ),
    0
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

  return (
    <Wrapper>
      {articles && (
        <>
          <StyledTop>
            <h1>Wybierz kategorię:</h1>

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
