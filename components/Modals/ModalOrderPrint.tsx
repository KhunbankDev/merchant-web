import React, { ReactElement } from "react";
import Link from "next/link";

interface Props {}

export default function ModalOrderPrint({}: Props): ReactElement {
  return (
    <div
      className="modal fade"
      id="ModalOrderPrint"
      tabIndex={-1}
      aria-hidden="true"
      style={{ display: "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">พิมพ์ใบปะหน้า</h5>
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
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="mb-3 row">
              <div className="col-sm-3 offset-sm-4">
                <a
                  href="/admin/order/printorder"
                  type="button"
                  className="btn btn-success"
                >
                  พิมพ์ใบปะหน้า
                </a>
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
