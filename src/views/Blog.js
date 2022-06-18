import React from "react";
import styled from "styled-components";
import Article from "components/organisms/Article/Article";

const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto;
  text-align: left;
`;

const Blog = ({ arts }) => {
  return (
    <Wrapper>
      {arts.map((article) => (
        <Article title={article.title} key={article.id} short={article.short} />
      ))}
    </Wrapper>
  );
};

export default Blog;
