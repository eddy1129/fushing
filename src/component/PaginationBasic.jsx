import React from "react";
import { Pagination } from "react-bootstrap";

function PaginationBasic(props) {
  let items = [];
  for (let number = 1; number <= props.pageCount; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === props.page}
        onClick={
          () => {
            props.setPage(number)
            window.scrollTo(0, 0);
          }

        }
      >
        {number}

      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination size="lg">{items}</Pagination>
    </div>
  );
}

export default PaginationBasic;