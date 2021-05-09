import React, { ReactElement } from "react";
import ButtonTool from "../Buttons/ButtonTool";
import Link from "next/link";

interface Props {}

export default function TableLogHistory({}: Props): ReactElement {
  return (
    <div className="card">
      <div className="card-header text-right">
        <h5 className="card-title"></h5>
      </div>
      <table className="table">
        <thead>
          <tr className="text-center">
            <th style={{ width: "5%" }}>วันที่</th>
            <th style={{ width: "10%" }}>เวลา login</th>
            <th style={{ width: "10%" }}>เวลา logout</th>
            <th style={{ width: "15%" }}>username</th>
            <th style={{ width: "15%" }}>email</th>
            <th style={{ width: "15%" }}>name</th>
            <th style={{ width: "15%" }}>สถานะ</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>01/04/2564</td>
            <td>13:00:00</td>
            <td>-</td>
            <td>usernameB</td>
            <td>email@mail.com</td>
            <td>nameA</td>
            <td className="text-success">online</td>
          </tr>
          <tr className="text-center">
            <td>01/04/2564</td>
            <td>13:00:00</td>
            <td>16:00:00</td>
            <td>usernameB</td>
            <td>email@mail.com</td>
            <td>nameA</td>
            <td className="text-secondary">offline</td>
          </tr>
          <tr className="text-center">
            <td>01/04/2564</td>
            <td>13:00:00</td>
            <td>16:00:00</td>
            <td>usernameB</td>
            <td>email@mail.com</td>
            <td>nameA</td>
            <td className="text-secondary">offline</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
