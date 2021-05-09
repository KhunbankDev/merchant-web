import React, { ReactElement, useState } from "react";

interface Props {}

export default function StoreDetail({}: Props): ReactElement {
  const [stateType, setstateType] = useState("show");

  const SetType = (type) => {
    setstateType(type);
  };

  const GetFrom = (type) => {
    if (type === "show") {
      return (
        <form>
          <div className="mb-3 row">
            <label className="col-form-label col-sm-2 text-sm-right">
              ชื่อร้าน :
            </label>
            <div className="col-sm-10">
              <label className="col-form-label col-sm-10 text-sm-left">
                ร้านค้าไอที เซอร์วิส
              </label>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-form-label col-sm-2 text-sm-right">
              ประเภทร้านค้า :
            </label>
            <div className="col-sm-10">
              <label className="col-form-label col-sm-10 text-sm-left">
                ไอที
              </label>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-form-label col-sm-2 text-sm-right">
              รายละเอียด :
            </label>
            <div className="col-sm-10">
              <label className="col-form-label col-sm-10 text-sm-left">
                ร้านค้าไอที เซอร์วิส เราขายอุปกรณ์คอมพิวเตอร์ที่มีคุณภาพ
              </label>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-form-label col-sm-2 text-sm-right">
              วันที่สร้าง :
            </label>
            <div className="col-sm-10">
              <label className="col-form-label col-sm-10 text-sm-left">
                01/04/2564
              </label>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-form-label col-sm-2 text-sm-right">
              ผู้สร้าง :
            </label>
            <div className="col-sm-10">
              <label className="col-form-label col-sm-10 text-sm-left">
                สมมุติ ใจดี
              </label>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-form-label col-sm-2 text-sm-right">
              ผู้ทำรายการล่าสุด :
            </label>
            <div className="col-sm-10">
              <label className="col-form-label col-sm-10 text-sm-left">
                สมมุติ ใจดี
              </label>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-form-label col-sm-2 text-sm-right">
              สถานะ :
            </label>
            <div className="col-sm-10">
              <label className="col-form-label col-sm-10 text-sm-left text-success">
                เปิดใช้งาน
              </label>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <form>
          <div className="mb-3 row">
            <label className="col-form-label col-sm-2 text-sm-right">
              ชื่อร้าน :
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="..." />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-form-label col-sm-2 text-sm-right">
              ประเภทร้านค้า :
            </label>
            <div className="col-sm-4">
              <select className="form-control">
                <option value="">ไอที</option>
                <option value="">ไอที2</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-form-label col-sm-2 text-sm-right">
              รายละเอียด :
            </label>
            <div className="col-sm-10">
              <textarea
                cols={30}
                rows={5}
                className="form-control"
                defaultValue={""}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-form-label col-sm-2 text-sm-right">
              วันที่สร้าง :
            </label>
            <div className="col-sm-4">
              <input type="text" className="form-control" placeholder="..." />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-form-label col-sm-2 text-sm-right">
              ผู้สร้าง :
            </label>
            <div className="col-sm-4">
              <input type="text" className="form-control" placeholder="..." />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-form-label col-sm-2 text-sm-right">
              ผู้ทำรายการล่าสุด :
            </label>
            <div className="col-sm-4">
              <input type="text" className="form-control" placeholder="..." />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-form-label col-sm-2 text-sm-right">
              สถานะ :
            </label>
            <div className="col-sm-4">
              <select className="form-control">
                <option value="">เปิดใช้งาน</option>
                <option value="">ปิดใช้งาน</option>
              </select>
            </div>
          </div>
        </form>
      );
    }
  };
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-8 col-sm-11">
                <h5 className="card-title">ข้อมูลร้านค้า</h5>
              </div>
              <div className="col-4 col-sm-1">
                <a
                  href="#"
                  onClick={() =>
                    stateType === "show" ? SetType("edit") : SetType("show")
                  }
                >
                  {stateType === "show" ? "แก้ไข" : "อัพเดท"}
                </a>
              </div>
            </div>
          </div>
          <div className="card-body">{GetFrom(stateType)}</div>
        </div>
      </div>
    </div>
  );
}
