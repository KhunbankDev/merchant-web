import React, { ReactElement } from "react";
import LayoutAdmin from "../../../Layouts/admin/LayoutAdmin";
import BreadHead from "../../../components/Breadcrumb/BreadHead";
import Search from "../../../components/Search/Search03";
import TableAudit from "../../../components/Tables/TableLogAudit";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <LayoutAdmin title="ข้อมูลสินค้า">
      <BreadHead
        title="Log การทำงาน"
        Active="Audit Log"
        Item1="Log การทำงาน"
        Item1Href="/admin/loghistory"
        Item2="Audit Log"
        Item2Href=""
        Item3=""
        Item3Href=""
      />
      <Search />
      <TableAudit />
    </LayoutAdmin>
  );
}
