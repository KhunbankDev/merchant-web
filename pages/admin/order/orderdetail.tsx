import React, { ReactElement } from "react";
import LayoutAdmin from "../../../Layouts/admin/LayoutAdmin";
import BreadHead from "../../../components/Breadcrumb/BreadHead";
import CardOrderDetail from "../../../components/Card/CardOrderDetail";
import Link from "next/link";
interface Props {}

export default function orderdetail({}: Props): ReactElement {
  return (
    <LayoutAdmin title="รายละเอียด order">
      <BreadHead
        title="Order สินค้า"
        Active="รายละเอียด order"
        Item1="Order สินค้า"
        Item1Href="/admin/order"
        Item2="รายละเอียด order"
        Item2Href=""
        Item3=""
        Item3Href=""
      />
      <div className="card">
        <div className="card-header">
          <Link href="/admin/order">
            <h5 className="card-title mb-0">
              <button className="btn btn-secondary">ย้อนกลับ</button>
            </h5>
          </Link>
        </div>
        <div className="card-body">
          <div className="mb-3 row">
            <div className="col-12 text-center">
              <b>
                <u>รายละเอียด order</u>
              </b>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <CardOrderDetail />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3 row">
                    <label className="col-form-label col-sm-2 text-sm-right">
                      สถานะ :
                    </label>
                    <div className=" col-sm-4 ">
                      <select className="form-control">
                        <option value="1">อนุมัติ order</option>
                        <option value="2">ยกเลิก order</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-form-label col-sm-2 text-sm-right">
                      หมายเหตุ :
                    </label>
                    <div className=" col-sm-6 ">
                      <textarea
                        className="form-control"
                        cols={30}
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-form-label col-sm-2 text-sm-right">
                      ผู้ทำรายการล่าสุด :
                    </label>
                    <label className="col-form-label col-sm-2 text-sm-right">
                      admin merchantshop
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-sm-1 offset-sm-5">
              <Link href="/admin/order">
                <button type="button" className="btn btn-success">
                  บันทึก
                </button>
              </Link>
            </div>
            <div className="col-sm-1 ">
              <button type="button" className="btn btn-secondary">
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}
