import React from "react";
import styled from "styled-components";
import Article from "components/organisms/Article/Article";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto;
  text-align: left;
`;

const Blog = ({ articles }) => {
  return (
    <Wrapper>
      {articles.map((art) => (
        <Article
          title={art.title}
          short={art.short}
          category={art.category}
          key={art.id}
        />
      ))}
    </Wrapper>
  );
};

Blog.propTypes = {
  articles: PropTypes.arrayOf(),
};

export default Blog;
