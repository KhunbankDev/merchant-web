import React, { ReactElement } from "react";
import ImgLogoCir from "../ImgLogoCircle/ImgLogoCir";
import Link from "next/link";
interface Props {}

export default function CardRegister({}: Props): ReactElement {
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-xs-12 col-sm-4 offset-sm-4">
            <div className="card m-5">
              <div className="card-header pb-0" style={{ textAlign: "center" }}>
                <div className="row">
                  <div className="col-12 text-left">
                    <Link href="/login">
                      <a>ย้อนกลับ</a>
                    </Link>
                  </div>
                  <div className="col-12">
                    <ImgLogoCir />
                    <h3 className="card-title mt-2">Register</h3>
                    <h6 className="card-subtitle text-muted">
                      Register Merchant Shop
                    </h6>
                  </div>
                </div>
              </div>
              <div className="card-body pt-2">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Email :</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="username"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Username :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="username"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password :</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Tel :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="000-000-0000"
                    />
                  </div>

                  <div className="row">
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-primary">
                        ลงทะเบียน
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
