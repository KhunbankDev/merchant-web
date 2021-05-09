import React, { ReactElement } from "react";
import ButtonTool from "../Buttons/ButtonToolOrder";
import Link from "next/link";

interface Props {}

export default function TableOrder({}: Props): ReactElement {
  return (
    <div className="card">
      <div className="card-header text-right">
        <h5 className="card-title"></h5>
      </div>
      <table className="table">
        <thead>
          <tr className="text-center">
            <th style={{ width: "10%" }}>
              <input type="checkbox" /> All
            </th>
            <th style={{ width: "15%" }}>วันที่สั่ง order</th>
            <th style={{ width: "10%" }}>เลขที่สั่งซื้อ</th>
            <th style={{ width: "20%" }}>รายการสินค้า</th>
            <th style={{ width: "10%" }}>ชื่อลูกค้า</th>
            <th style={{ width: "15%" }}>การชำระ</th>
            <th style={{ width: "10%" }}>สถานะ order</th>
            <th style={{ width: "10%" }}>เครื่องมือ</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>
              <input type="checkbox" />
            </td>
            <td>01/04/2564 12:50:00</td>
            <td>#123456789</td>
            <td>
              สินค้าA 1 รายการ
              <br />
              สินค้าB 1 รายการ
            </td>
            <td>ชื่อลูกค้า A</td>
            <td>เก็บเงินปลายทาง</td>
            <td className="text-warning">รออนุมัติ</td>
            <td>
              <ButtonTool />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
