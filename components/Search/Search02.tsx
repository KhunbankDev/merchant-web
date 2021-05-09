import React, { ReactElement } from "react";

interface Props {}

export default function Search02({}: Props): ReactElement {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">ค้นหา</h5>
      </div>
      <div className="card-body">
        <form>
          <div className="mb-3 row">
            <label className="col-form-label col-sm-2 text-sm-right">
              คำค้น :
            </label>
            <div className="col-sm-8">
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-form-label col-sm-2 text-sm-right">
              วันที่
            </label>
            <div className="col-sm-2">
              <input type="text" className="form-control" placeholder="" />
            </div>
            <label className="col-form-label col-sm-1 text-sm-center">
              ถึง
            </label>
            <div className="col-sm-2">
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-form-label col-sm-2 text-sm-right">
              สถานะ :
            </label>
            <div className="col-sm-5">
              <select className="form-control">
                <option value="1">ไอที</option>
                <option value="1">เสื้อผ้า</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <button className="btn btn-info">ค้นหา</button>{" "}
              <button className="btn btn-secondary">รีเซ็ต</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
