import React from "react";
import styled from "styled-components";
import Article from "components/organisms/Article/Article";

const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto;
  text-align: left;
`;

const Blog = () => {
  return (
    <Wrapper>
      <Article />
      <Article />
      {/*       <StyledArticle as="section" />
      <StyledArticle as="section" /> */}
    </Wrapper>
  );
};

export default Blog;
