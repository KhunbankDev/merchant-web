import React, { ReactElement } from "react";
import LayoutAdmin from "../../../Layouts/admin/LayoutAdmin";
import BreadHead from "../../../components/Breadcrumb/BreadHead";
import Search from "../../../components/Search/Search03";
import TableLog from "../../../components/Tables/TableLogHistory";
interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <LayoutAdmin title="Log การทำงาน">
      <BreadHead
        title="Log การทำงาน"
        Active="ประวัติการ login"
        Item1="Log การทำงาน"
        Item1Href="/admin/loghistory"
        Item2="ประวัติการ login"
        Item2Href=""
        Item3=""
        Item3Href=""
      />
      <Search />
      <TableLog />
    </LayoutAdmin>
  );
}
