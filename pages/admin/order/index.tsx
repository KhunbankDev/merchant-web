import React, { ReactElement } from "react";
import LayoutAdmin from "../../../Layouts/admin/LayoutAdmin";
import BreadHead from "../../../components/Breadcrumb/BreadHead";
import Search from "../../../components/Search/Search02";
import TableOrder from "../../../components/Tables/TableOrder";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <LayoutAdmin title="ข้อมูลสินค้า">
      <BreadHead
        title="Order สินค้า"
        Active="Order สินค้า"
        Item1="Order สินค้า"
        Item1Href="/admin/order"
        Item2=""
        Item2Href=""
        Item3=""
        Item3Href=""
      />
      <Search />
      <TableOrder />
    </LayoutAdmin>
  );
}
