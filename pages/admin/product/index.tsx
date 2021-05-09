import React, { ReactElement } from "react";
import LayoutAdmin from "../../../Layouts/admin/LayoutAdmin";
import BreadHead from "../../../components/Breadcrumb/BreadHead";
import Search from "../../../components/Search/Search01";
import TableProduct from "../../../components/Tables/TableProduct";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <LayoutAdmin title="ข้อมูลสินค้า">
      <BreadHead
        title="ข้อมูลสินค้า"
        Active="ข้อมูลสินค้า"
        Item1="ข้อมูลสินค้า"
        Item1Href="/admin/product"
        Item2=""
        Item2Href=""
        Item3=""
        Item3Href=""
      />
      <Search />
      <TableProduct />
    </LayoutAdmin>
  );
}
