import React, { ReactElement } from "react";
import ButtonTool from "../../components/Buttons/ButtonTool";
import Link from "next/link";

interface Props {}

export default function TableProduct({}: Props): ReactElement {
  return (
    <div className="card">
      <div className="card-header text-right">
        <h5 className="card-title">
          <Link href="/admin/product/form">
            <button className="btn btn-success">เพิ่ม</button>
          </Link>
        </h5>
      </div>
      <table className="table">
        <thead>
          <tr className="text-center">
            <th style={{ width: "5%" }}>#</th>
            <th style={{ width: "10%" }}>ID</th>
            <th style={{ width: "10%" }}>รูปภาพ</th>
            <th className="d-none d-md-table-cell" style={{ width: "15%" }}>
              ชื่อสินค้า
            </th>
            <th style={{ width: "15%" }}>ราคา/ต่อหน่วย</th>
            <th style={{ width: "15%" }}>จำนวน</th>
            <th style={{ width: "15%" }}>จำนวนคงเหลือ</th>
            <th style={{ width: "15%" }}>เครื่องมือ</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>1</td>
            <td>101</td>
            <td>
              {" "}
              <img
                className="img-thumbnail rounded mr-2 mb-2"
                src="/imgs/CardProducts/product1.jpg"
                alt="Placeholder"
              />
            </td>
            <td>สินค้า A</td>
            <td>1,000</td>
            <td>30</td>
            <td>30</td>
            <td>
              <ButtonTool />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
