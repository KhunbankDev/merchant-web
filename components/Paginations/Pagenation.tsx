import React, { ReactElement } from "react";
import Pagination from "react-bootstrap/Pagination";
interface Props {}

export default function Pagenation({}: Props): ReactElement {
  return (
    <Pagination size="sm">
      <Pagination.Item>{"<<"}</Pagination.Item>
      <Pagination.Item>{"<"}</Pagination.Item>
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{"..."}</Pagination.Item>
      <Pagination.Item>{18}</Pagination.Item>
      <Pagination.Item>{19}</Pagination.Item>
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Item>{">"}</Pagination.Item>
      <Pagination.Item>{">>"}</Pagination.Item>
    </Pagination>
  );
}
