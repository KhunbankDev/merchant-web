import React, { ReactElement } from "react";
import LayoutAdmin from "../../../Layouts/admin/LayoutAdmin";
import BreadHead from "../../../components/Breadcrumb/BreadHead";
import Link from "next/link";

interface Props {}

export default function form({}: Props): ReactElement {
  return (
    <LayoutAdmin title="ข้อมูลสินค้า">
      <BreadHead
        title="เพิ่ม ข้อมูลสินค้า"
        Active="เพิ่ม ข้อมูลสินค้า"
        Item1="ข้อมูลสินค้า"
        Item1Href="/admin/product"
        Item2="เพิ่ม ข้อมูลสินค้า"
        Item2Href=""
        Item3=""
        Item3Href=""
      />

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">ฟอร์มข้อมูลสินค้า</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2 text-sm-right">
                    รูปภาพหน้าปกสินค้า :
                  </label>
                  <div className="col-sm-10">
                    <img
                      className="img-thumbnail rounded mr-2 mb-2"
                      src="/imgs/CardProducts/product1.jpg"
                      alt="Placeholder"
                    />
                    <br />
                    <input type="file" name="" id="" />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2 text-sm-right">
                    รูปภาพสินค้า :
                  </label>
                  <div className="col-sm-10">
                    <img
                      className="img-thumbnail rounded mr-2 mb-2"
                      src="/imgs/CardProducts/product1.jpg"
                      alt="Placeholder"
                    />
                    <img
                      className="img-thumbnail rounded mr-2 mb-2"
                      src="/imgs/CardProducts/product1.jpg"
                      alt="Placeholder"
                    />
                    <input type="file" name="" id="" />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2 text-sm-right">
                    ชื่อสินค้า :
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" name="" id="" />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2 text-sm-right">
                    รายละเอียด :
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      className="form-control"
                      cols={30}
                      rows={10}
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2 text-sm-right">
                    ราคาต่อหน่วย :
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" name="" id="" />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2 text-sm-right">
                    จำนวน :
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" name="" id="" />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2 text-sm-right">
                    ประเภทสินค้า :
                  </label>
                  <div className="col-sm-10">
                    <select className="form-control">
                      <option value="1">ไอที</option>
                      <option value="2">เสื้อผ้า</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2 text-sm-right">
                    ชนิดสินค้า :
                  </label>
                  <div className="col-sm-10">
                    <select className="form-control">
                      <option value="1">แรม</option>
                      <option value="2">การ์ดจอ</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2 text-sm-right">
                    ขายในร้านค้า :
                  </label>
                  <div className="col-sm-10">
                    <select className="form-control">
                      <option value="1">ร้านค้าA</option>
                      <option value="2">ร้านค้าB</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-sm-1 offset-sm-5">
                    <Link href="/admin/product">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}
