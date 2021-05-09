import React, { ReactElement } from "react";
import ModalProduct from "../../components/Modals/ModalProduc";

interface Props {}

export default function ButtonTool({}: Props): ReactElement {
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
          <a
            className="dropdown-item"
            data-toggle="modal"
            data-target="#defaultModalPrimary"
          >
            รายละเอียด
          </a>
          <a className="dropdown-item" href="#">
            แก้ไข
          </a>
          <a className="dropdown-item" href="#">
            ลบ
          </a>
        </div>
      </div>

      <ModalProduct />
    </>
  );
}
