import React, { ReactElement } from "react";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-12 " style={{ textAlign: "right" }}>
            <h5 className="text-uppercase">MERCHANT MANAGEMENT</h5>
            <a href="#!" className="text-dark">
              -Merchant Login
            </a>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/">
          MerchantShop.com
        </a>
      </div>
    </footer>
  );
}
