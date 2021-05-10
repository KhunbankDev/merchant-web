import React, { ReactElement } from "react";
import Link from "next/link";

interface Props {}

export default function Navsidebar({}: Props): ReactElement {
  return (
    <nav id="sidebar" className="sidebar">
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="#">
          <span className="align-middle">MerchantWeb</span>
        </a>
        <ul className="sidebar-nav">
          <li className="sidebar-header">Manu</li>
          <li className="sidebar-item">
            <Link href="/admin">
              <a className="sidebar-link">
                <i className="fas fa-chart-line"></i>{" "}
                <span className="align-middle">Dashboard</span>
              </a>
            </Link>
          </li>

          <li className="sidebar-item">
            <a
              data-target="#ui"
              data-toggle="collapse"
              className="sidebar-link collapsed"
            >
              <i className="fas fa-store"></i>{" "}
              <span className="align-middle">ร้านค้า</span>
            </a>
            <ul
              id="ui"
              className="sidebar-dropdown list-unstyled collapse "
              data-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Link href="/admin/store">
                  <a className="sidebar-link" href="#">
                    <i className="fas fa-store-alt"></i> ข้อมูลร้านค้า
                  </a>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link href="/admin/product">
                  <a className="sidebar-link" href="ui-buttons.html">
                    <i className="fas fa-box-open"></i> ข้อมูลสินค้า
                  </a>
                </Link>
              </li>
            </ul>
          </li>

          <li className="sidebar-item">
            <Link href="/admin/order">
              <a className="sidebar-link" href="#">
                <i className="fas fa-boxes"></i>{" "}
                <span className="align-middle">Order สินค้า</span>{" "}
                <span className="badge bg-danger rounded-pill me-2">2</span>
              </a>
            </Link>
          </li>

          <li className="sidebar-item">
            <a
              data-target="#ui3"
              data-toggle="collapse"
              className="sidebar-link collapsed"
            >
              <i className="fas fa-tasks"></i>{" "}
              <span className="align-middle">Log การทำงาน</span>{" "}
            </a>
            <ul
              id="ui3"
              className="sidebar-dropdown list-unstyled collapse "
              data-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Link
                  href="/admin/loghistory
              "
                >
                  <a className="sidebar-link" href="#">
                    <i className="fas fa-history"></i> ประวัติการทำงาน{" "}
                  </a>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  href="/admin/logaudit
              "
                >
                  <a className="sidebar-link" href="#">
                    <i className="fas fa-clipboard-list"></i> Audit Log{" "}
                  </a>
                </Link>
              </li>
            </ul>
          </li>

          <li className="sidebar-item">
            <a
              data-target="#ui4"
              data-toggle="collapse"
              className="sidebar-link collapsed"
            >
              <i className="fas fa-cogs"></i>{" "}
              <span className="align-middle">ตั้งค่า</span>{" "}
            </a>
            <ul
              id="ui4"
              className="sidebar-dropdown list-unstyled collapse "
              data-parent="#sidebar"
            >
              <li className="sidebar-item">
                <a className="sidebar-link" href="#">
                  <i className="fas fa-users-cog"></i> Staff Manage{" "}
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="#">
                  <i className="fas fa-user-lock"></i> กำหนดสิทธิ์ การใช้งาน{" "}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
