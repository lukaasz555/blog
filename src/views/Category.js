import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { URL, query } from "./Blog";
import axios from "axios";
import Article from "components/organisms/Article/Article";

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 60px;
`;

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .post(
        URL,
        { query },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        /*         console.log(data.allArticles); */
        setCategories(data.allArticles);
        setArticles(data.allArticles);
      })
      .catch((err) => setError("SORKI"));
  }, []);

  const filterCategories = (e) => {
    if (articles) {
      const newArr = articles.filter(
        (art) => art.category === e.target.textContent
      );
      console.log(newArr);
      setFilteredCategories(newArr);
    }
  };

  return (
    <Wrapper>
      <h3>kategorie wpisów:</h3>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id} onClick={filterCategories}>
            {cat.category}
          </li>
        ))}
      </ul>
      {filteredCategories &&
        filteredCategories.map((art) => (
          <Article
            title={art.title}
            short={art.short}
            category={art.category}
            date={art.date}
            key={art.id}
          />
        ))}
    </Wrapper>
  );
};

export default Category;
