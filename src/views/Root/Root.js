import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "assets/theme";
import GlobalStyle from "assets/styles/GlobalStyles";
import Header from "components/molecules/Header/Header";
import MobileNav from "components/molecules/MobileNav/MobileNav";
import { Wrapper, StyledMain } from "views/Root/Root.styles";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";
import Category from "../Category/Category";
import DesktopNav from "components/molecules/DesktopNav/DesktopNav";
import FullArticle from "../FullArticle/FullArticle";
import axios from "axios";

const Root = () => {
  // handle mobile-nav:
  const [isOpen, setOpen] = useState(false);
  const toggleMobileNav = () => {
    setOpen(!isOpen);
  };

  // getting data from DatoCMS:
  const URL = "https://graphql.datocms.com/";
  const query = `
{
  allArticles {
    id
    title
    short
    content
    category
    img {
      id
      url
    }
    date
  }
}
`;

  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  let isFiltered = false;
  const [filteredArts, setFilteredArts] = useState([]);
  const [categories, setCategories] = useState([]);

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
        /*         setTimeout(() => {
          setArticles(data.allArticles);
        }, 430); */
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError("Przepraszamy, nie udało się załadować artykułów.");
      });
  }, []);

  // articles filter:
  const handleFilter = (e) => {
    isFiltered = true;
    const filteredArts = articles.filter(
      (art) => `#${art.category}` === e.target.textContent
    );
    console.log(isFiltered);
    console.log(filteredArts);
    setFilteredArts(filteredArts);
  };

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Wrapper>
            <StyledMain>
              <Header
                isOpen={isOpen}
                setOpen={setOpen}
                onClick={toggleMobileNav}
              />
              <MobileNav isOpen={isOpen} onClick={toggleMobileNav}></MobileNav>
              <DesktopNav />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Blog
                      articles={articles}
                      setArticles={setArticles}
                      error={error}
                      isFiltered={isFiltered}
                      filteredArts={filteredArts}
                    />
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/category"
                  element={<Category articles={articles} />}
                />
                {articles.map(
                  ({
                    id,
                    title,
                    short,
                    category,
                    content,
                    img = null,
                    date,
                  }) => (
                    <Route
                      key={id}
                      path={`/${id}`}
                      element={
                        <FullArticle
                          key={id}
                          title={title}
                          short={short}
                          category={category}
                          content={content}
                          image={img}
                          date={date}
                        />
                      }
                    />
                  )
                )}
              </Routes>
            </StyledMain>
          </Wrapper>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default Root;
