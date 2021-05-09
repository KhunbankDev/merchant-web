import React, { ReactElement } from "react";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row text-muted">
          <div className="col-12 text-center">
            <p className="mb-0">
              <a href="#" className="text-muted">
                <strong>Copyright 2021 Merchant. All rights reserved.</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
