import React from "react";
import { Pagination } from "react-bootstrap";
import "../App.css";
function PaginationBasic(props) {
  let items = [];
  for (let number = 1; number <= props.pageCount; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === props.page}
        onClick={() => {
          props.setPage(number);
          window.scrollTo(0, 0);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination size="sm" className="Pagination_margin">
      {items}
    </Pagination>
  );
}

export default PaginationBasic;
