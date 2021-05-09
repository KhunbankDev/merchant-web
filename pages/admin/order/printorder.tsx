import React, { ReactElement } from "react";
import LayoutAdmin from "../../../Layouts/admin/LayoutAdmin";
import BreadHead from "../../../components/Breadcrumb/BreadHead";
import Link from "next/link";
import styles from "./printorder.module.css";
import TablePrint from "../../../components/Tables/TablePrint";
interface Props {}

export default function printorder({}: Props): ReactElement {
  return (
    <LayoutAdmin title="พิมพ์ใบปะหน้า">
      <BreadHead
        title="Order สินค้า"
        Active="พิมพ์ใบปะหน้า"
        Item1="Order สินค้า"
        Item1Href="/admin/order"
        Item2="พิมพ์ใบปะหน้า"
        Item2Href=""
        Item3=""
        Item3Href=""
      />
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-4">
              <Link href="/admin/order">
                <button className="btn btn-secondary">ย้อนกลับ</button>
              </Link>
              &nbsp;&nbsp;&nbsp;
              <button className="btn btn-info">พิมพ์</button>
            </div>
          </div>
          <div className="row">
            <div className="col-11 text-right">
              <span>หน้า 1/5</span>
            </div>
          </div>
        </div>
        <div className="card-body">
          <TablePrint />
          <br />
          <hr className={styles.hr} />
          <br />
          <TablePrint />
          <br />
        </div>
      </div>
    </LayoutAdmin>
  );
}
