import React, { ReactElement } from "react";
import ModalOrderStatus from "../Modals/ModalOrderStatus";
import ModalOrderPrint from "../Modals/ModalOrderPrint";
import Link from "next/link";

interface Props {}

export default function ButtonToolOrder({}: Props): ReactElement {
  return (
    <>
      <div className="btn-group btn-group-sm">
        <button
          type="button"
          className="btn"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <i className="fas fa-ellipsis-v"></i>
        </button>
        <div className="dropdown-menu" style={{}}>
          <Link href="/admin/order/orderdetail">
            <a className="dropdown-item">รายละเอียด</a>
          </Link>
          <a
            className="dropdown-item"
            data-toggle="modal"
            data-target="#ModalOrderStatus"
          >
            เปลี่ยนสถานะ
          </a>
          <a
            className="dropdown-item"
            data-toggle="modal"
            data-target="#ModalOrderPrint"
          >
            พิมพ์ใบปะหน้า
          </a>
        </div>
      </div>

      <ModalOrderStatus />
      <ModalOrderPrint />
    </>
  );
}
