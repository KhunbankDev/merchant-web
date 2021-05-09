import React, { ReactElement } from "react";
import LayoutAdmin from "../../Layouts/admin/LayoutAdmin";
import BreadHead from "../../components/Breadcrumb/BreadHead";
import CardProductSale from "../../components/Card/CardGroupItemSale";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <LayoutAdmin title="Dashborad">
      <BreadHead
        title="Dashborad"
        Active="Dashborad"
        Item1="Dashborad"
        Item1Href="/"
        Item2=""
        Item2Href=""
        Item3=""
        Item3Href=""
      />
      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title mb-4">รายการสินค้าทั้งหมด</h5>
              <h1 className="mt-1 mb-3">100</h1>
              <div className="mb-1">
                <span className="text-muted">รายการ</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title mb-4">รายการสินค้าที่ขายได้</h5>
              <h1 className="mt-1 mb-3">50</h1>
              <div className="mb-1">
                <span className="text-muted">รายการ</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title mb-4">จำนวนคนรีวิว</h5>
              <h1 className="mt-1 mb-3">10</h1>
              <div className="mb-1">
                <span className="text-muted">รายการ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardProductSale title="รายการสินค้าขายดี" />
      <CardProductSale title="รายการสินค้าที่มียอดขายต่ำ" />
    </LayoutAdmin>
  );
}
