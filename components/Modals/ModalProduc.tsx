import React, { ReactElement } from "react";

interface Props {}

export default function ModalProduc({}: Props): ReactElement {
  return (
    <div
      className="modal fade"
      id="defaultModalPrimary"
      tabIndex={-1}
      aria-hidden="true"
      style={{ display: "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">รายละเอียด สินค้า</h5>
          </div>
          <div className="modal-body m-3">
            <div className="row">
              <div className="col-4">
                <img
                  className="img-thumbnail rounded mr-2 mb-2"
                  src="/imgs/CardProducts/product1.jpg"
                  alt="Placeholder"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-thumbnail rounded mr-2 mb-2"
                  src="/imgs/CardProducts/product1.jpg"
                  alt="Placeholder"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-thumbnail rounded mr-2 mb-2"
                  src="/imgs/CardProducts/product1.jpg"
                  alt="Placeholder"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <label className="col-form-label col-sm-4 text-sm-right">
                    ชื่อสินค้า :
                  </label>
                  <label className="col-form-label col-sm-8 text-sm-left">
                    สินค้า A
                  </label>
                </div>
                <div className="row">
                  <label className="col-form-label col-sm-4 text-sm-right">
                    ราคาต่อหน่วย :
                  </label>
                  <label className="col-form-label col-sm-2 text-sm-right">
                    10,000
                  </label>
                </div>
                <div className="row">
                  <label className="col-form-label col-sm-4 text-sm-right">
                    จำนวน :
                  </label>
                  <label className="col-form-label col-sm-2 text-sm-right">
                    100
                  </label>
                </div>
                <div className="row">
                  <label className="col-form-label col-sm-4 text-sm-right">
                    ประเภทสินค้า :
                  </label>
                  <label className="col-form-label col-sm-2 text-sm-left">
                    สินค้าไอที
                  </label>
                </div>
                <div className="row">
                  <label className="col-form-label col-sm-4 text-sm-right">
                    ชนิดสินค้า :
                  </label>
                  <label className="col-form-label col-sm-2 text-sm-left">
                    การ์ดจอ
                  </label>
                </div>
                <div className="row">
                  <label className="col-form-label col-sm-4 text-sm-right">
                    ร้านค้า :
                  </label>
                  <label className="col-form-label col-sm-2 text-sm-left">
                    ร้านค้า A
                  </label>
                </div>
                <div className="row">
                  <label className="col-form-label col-sm-4 text-sm-right">
                    รายละเอียด :
                  </label>
                  <label className="col-form-label col-sm-2 text-sm-left">
                    ...
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              ปิด
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
