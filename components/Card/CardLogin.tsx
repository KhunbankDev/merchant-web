import React, { ReactElement } from "react";
import ImgLogoCir from "../ImgLogoCircle/ImgLogoCir";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {}

export default function CardLogin({}: Props): ReactElement {
  const router = useRouter();
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-xs-12 col-sm-4 offset-sm-4">
            <div className="card m-5">
              <div className="card-header pb-0" style={{ textAlign: "center" }}>
                <ImgLogoCir />
                <h3 className="card-title mt-2">Login</h3>
                <h6 className="card-subtitle text-muted">Merchant Shop</h6>
              </div>
              <div className="card-body pt-2">
                <form>
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
                    <label className="form-check m-0">
                      <input type="checkbox" className="form-check-input" />
                      <span className="form-check-label">Remember user</span>
                    </label>
                  </div>
                  <div className="row mb-2">
                    <div className="col-6 text-center">
                      <Link href="/register">
                        <a>ลงทะเบียน</a>
                      </Link>
                    </div>
                    <div className="col-6 text-center">
                      <Link href="/forgot">
                        <a>ลืมรหัสผ่าน ?</a>
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 text-center">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => router.push("/admin")}
                      >
                        เข้าสู่ระบบ
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
