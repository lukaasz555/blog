import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Loader from "components/atoms/Loader";
import Article from "components/organisms/Article/Article";

const PaginatedArticles = ({ artsPerPage, articles, error }) => {
  const [currentArts, setCurrentArts] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [artOffset, setArtOffset] = useState(0);

  useEffect(() => {
    const endOffset = artOffset + artsPerPage;
    console.log(`Loading articles from ${artOffset} to ${endOffset}`);
    console.log("articles to" + articles);
    setCurrentArts(articles.slice(artOffset, endOffset));
    setPageCount(Math.ceil(articles.length / artsPerPage));
  }, [artOffset, artsPerPage]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * artsPerPage) % articles.length;
    console.log(
      `User requested page number ${e.selected} which is offset ${newOffset}`
    );
  };

  return (
    <>
      <ReactPaginate
        nextLabel="następna strona"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="poprzednia strona"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default PaginatedArticles;
