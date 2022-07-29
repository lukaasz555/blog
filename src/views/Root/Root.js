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
    source
  }
}
`;

  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  //let isFiltered = false;
  const [filteredArts, setFilteredArts] = useState([]);

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
        const arts = data.allArticles.map((art) => ({
          id: +art.id,
          key: art.id,
          title: art.title,
          date: art.date,
          short: art.short,
          img: art.img,
          content: art.content,
          category: art.category,
          source: art.source,
        }));
        setArticles(arts.sort((a, b) => b.id - a.id));
      })
      .catch(() => {
        setError("Przepraszamy, nie udało się załadować artykułów.");
      });
  }, []);

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
                      //isFiltered={isFiltered}
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
                    // img = null,
                    img,
                    date,
                    source,
                  }) => (
                    <Route
                      key={id}
                      path={`/${id}`}
                      element={
                        <FullArticle
                          key={Number}
                          title={title}
                          short={short}
                          category={category}
                          content={content}
                          img={img}
                          date={date}
                          source={source}
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
