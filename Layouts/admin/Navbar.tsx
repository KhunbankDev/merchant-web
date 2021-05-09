import React, { ReactElement } from "react";
import Link from "next/link";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light navbar-bg">
        <a className="sidebar-toggle d-flex">
          <i className="hamburger align-self-center" />
        </a>
        <form className="d-none d-sm-inline-block">
          <div className="input-group input-group-navbar">
            <input
              type="text"
              className="form-control"
              placeholder="Search…"
              aria-label="Search"
            />
            <button className="btn" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav navbar-align">
            <li className="nav-item dropdown">
              <a
                className="nav-icon dropdown-toggle"
                href="#"
                id="alertsDropdown"
                data-toggle="dropdown"
              >
                <div className="position-relative">
                  <i className="far fa-bell"></i>
                  <span className="indicator">1</span>
                </div>
              </a>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
                aria-labelledby="alertsDropdown"
              >
                <div className="dropdown-menu-header">1 New Notifications</div>
                <div className="list-group">
                  <a href="#" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <i className="far fa-bell"></i>
                      </div>
                      <div className="col-10">
                        <div className="text-dark">Order สินค้า</div>
                        <div className="text-muted small mt-1">
                          มีการสั่ง Order เลขที่ #123456789
                        </div>
                        <div className="text-muted small mt-1">30 นาที</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="dropdown-menu-footer">
                  <a href="#" className="text-muted">
                    แสดงการแจ้งเตือนทั้งหมด
                  </a>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-icon dropdown-toggle d-inline-block d-sm-none"
                href="#"
                data-toggle="dropdown"
              >
                <img
                  src="/adminkit/dist/img/avatars/avatar.jpg"
                  className="avatar img-fluid rounded mr-1"
                  alt="Charles Hall"
                />
              </a>
              <a
                className="nav-link dropdown-toggle d-none d-sm-inline-block"
                href="#"
                data-toggle="dropdown"
              >
                <img
                  src="/adminkit/dist/img/avatars/avatar.jpg"
                  className="avatar img-fluid rounded mr-1"
                  alt="Charles Hall"
                />{" "}
                <span className="text-dark">Admin MerchantShop</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">
                  <i className="align-middle mr-1" data-feather="user" />{" "}
                  โปรไฟล์
                </a>
                <div className="dropdown-divider" />
                <Link href="/">
                  <a className="dropdown-item">ออกจากระบบ</a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
