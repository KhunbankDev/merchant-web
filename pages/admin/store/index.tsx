import React, { ReactElement } from "react";
import LayoutAdmin from "../../../Layouts/admin/LayoutAdmin";
import BreadHead from "../../../components/Breadcrumb/BreadHead";
import StoreDetail from "../../../components/Store/StoreDetail";
interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <LayoutAdmin title="ข้อมูลร้านค้า">
      <BreadHead
        title="ข้อมูลร้านค้า"
        Active="ข้อมูลร้านค้า"
        Item1="ข้อมูลร้านค้า"
        Item1Href="/"
        Item2=""
        Item2Href=""
        Item3=""
        Item3Href=""
      />
      <StoreDetail />
    </LayoutAdmin>
  );
}
