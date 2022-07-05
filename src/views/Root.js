import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "assets/theme";
import GlobalStyle from "assets/styles/GlobalStyles";
import Header from "components/molecules/Header/Header";
import MobileNav from "components/molecules/MobileNav/MobileNav";
import { Wrapper, StyledMain } from "views/Root.styled";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
import { articles } from "data/data";
import DesktopNav from "components/molecules/DesktopNav/DesktopNav";

const Root = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMobileNav = () => {
    setOpen(!isOpen);
  };

  /*   const handleHideNav = () => {
    setOpen(!isOpen);
  }; */

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
                <Route path="/" element={<Blog articles={articles} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </StyledMain>
          </Wrapper>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default Root;
