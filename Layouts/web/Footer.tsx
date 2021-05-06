import React, { ReactElement } from "react";
import Link from "next/link";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-12 " style={{ textAlign: "right" }}>
            <h5 className="text-uppercase">MERCHANT MANAGEMENT</h5>
            <Link href="/login">
              <a href="#" className="text-dark">
                -Merchant Login
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright &nbsp;&nbsp;
        <a className="text-dark" href="#">
          MerchantShop.All rights reserved.
        </a>
      </div>
    </footer>
  );
}
