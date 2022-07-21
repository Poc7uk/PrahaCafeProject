import React from "react";
import _ from "lodash";
import "./pagination.css";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav className="container pagination__container">
      <ul className="pagination">
        {pages.map((page) => (
          <li className="page-item" key={"page_" + page}>
            <button
              className={
                "page-link" + (page === currentPage ? " active-page" : "")
              }
              onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
