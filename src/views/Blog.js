import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto;
  text-align: left;
`;

const StyledArticle = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  height: 200px;
  padding-bottom: 15px;
  margin: 15px 0;
  margin-bottom: 30px;

  &:not(:last-child) {
    border-bottom: 2px solid red;
  }
`;

const Blog = () => {
  return (
    <Wrapper>
      <StyledArticle as="section" />
      <StyledArticle as="section" />
      <StyledArticle as="section" />
    </Wrapper>
  );
};

export default Blog;
