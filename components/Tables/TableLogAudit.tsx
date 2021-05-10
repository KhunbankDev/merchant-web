import React, { ReactElement } from "react";
import ButtonTool from "../Buttons/ButtonTool";
import Link from "next/link";

interface Props {}

export default function TableLogAudit({}: Props): ReactElement {
  return (
    <div className="card">
      <div className="card-header text-right">
        <h5 className="card-title"></h5>
      </div>
      <table className="table">
        <thead>
          <tr className="text-center">
            <th style={{ width: "5%" }}>Username</th>
            <th style={{ width: "10%" }}>Namwe</th>
            <th style={{ width: "10%" }}>รายการล่าสุด</th>
            <th style={{ width: "15%" }}>สถานะ</th>
            <th style={{ width: "15%" }}>เครื่องมือ</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>usernameA</td>
            <td>nameA</td>
            <td className="text-left">
              ทำการเปลี่ยนแปลง Order จาก รออนุมัติ เป็น อนุมัติคำสั่งซื้อ
              เมื่อวันที่ 01/01/2564 เวลา 15:00:14 ...
            </td>
            <td className="text-success">online</td>

            <td className="text-success">
              <ButtonTool />
            </td>
          </tr>
          <tr className="text-center">
            <td>usernameA</td>
            <td>nameA</td>
            <td>
              ทำการเปลี่ยนแปลง Order จาก รออนุมัติ เป็น อนุมัติคำสั่งซื้อ
              เมื่อวันที่ 01/01/2564 เวลา 15:00:14 ...
            </td>
            <td className="text-success">online</td>

            <td className="text-success">
              <ButtonTool />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
