import React, { ReactElement } from "react";

interface Props {}

export default function CardOrderDetail({}: Props): ReactElement {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title mb-0">เลขที่คำสั่งซื้อ #123456789-10</h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <table className="table table-striped">
              <thead>
                <tr className="bg-light bg-gradient text-center">
                  <th style={{ width: "60%" }}>รายการ</th>
                  <th style={{ width: "10%" }}>ราคาต่อหน่วย</th>
                  <th style={{ width: "10%" }}>จำนวน</th>
                  <th style={{ width: "10%" }}>รวม</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4}>
                    <b>ชื่อร้านค้า A</b>
                  </td>
                </tr>
                <tr>
                  <td> ชื่อสินค้า A</td>
                  <td className="text-right">10,000</td>
                  <td className="text-right">1</td>
                  <td className="text-right">10,000</td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <b>ชื่อร้านค้า B</b>
                  </td>
                </tr>
                <tr>
                  <td> ชื่อสินค้า B</td>
                  <td className="text-right">10,000</td>
                  <td className="text-right">1</td>
                  <td className="text-right">10,000</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <span className="fw-bold">รวม</span>
                  </td>
                  <td className="text-right fw-bold">2</td>
                  <td className="text-right fw-bold">20,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <label className="form-label fw-bold" htmlFor="inputEmail4">
              สถานที่จัดส่ง
            </label>
          </div>
          <div className="col-12">
            <span>
              101/01 หมู่ 1 ตำบล หนองจ๊อบ อำเภอสันทราย จังหวัดเชียงใหม่ 50210{" "}
            </span>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <label className="form-label fw-bold" htmlFor="inputEmail4">
              วิธีชำระเงิน
            </label>
          </div>
          <div className="col-12">
            <span>ชำระเงินปลายทาง </span>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <span>วันที่ทำรายการ 19/04/2564 09:00:00 </span>
          </div>
        </div>
      </div>
    </div>
  );
}
