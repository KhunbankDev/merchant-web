import React, { ReactElement } from "react";
import Link from "next/link";

interface Props {}

export default function ModalOrderStatus({}: Props): ReactElement {
  return (
    <div
      className="modal fade"
      id="ModalOrderStatus"
      tabIndex={-1}
      aria-hidden="true"
      style={{ display: "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">เปลี่ยนสถานะ Order</h5>
          </div>
          <div className="modal-body m-3">
            <div className="row">
              <div className="col-12">
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-3 text-sm-right">
                    เลขที่คำสั่งซื้อ :
                  </label>
                  <label className="col-form-label col-sm-9 text-sm-left">
                    #123456789,#123456789,#123456789,#123456789,#123456789,#123456789,#123456789,#123456789,#123456789,#123456789,#123456789
                  </label>
                </div>

                <div className="mb-3 row">
                  <label className="col-form-label col-sm-3 text-sm-right">
                    สถานะ :
                  </label>
                  <div className=" col-sm-6 ">
                    <select className="form-control">
                      <option value="1">อนุมัติ order</option>
                      <option value="2">ยกเลิก order</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <label className="col-form-label col-sm-3 text-sm-right">
                    หมายเหตุ :
                  </label>
                  <div className=" col-sm-9 ">
                    <textarea
                      className="form-control"
                      cols={30}
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="mb-3 row">
              <div className="col-sm-2 offset-sm-4">
                <Link href="/admin/order">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    บันทึก
                  </button>
                </Link>
              </div>
              <div className="col-sm-2 ">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
