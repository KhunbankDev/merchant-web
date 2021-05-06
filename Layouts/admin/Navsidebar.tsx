import React, { ReactElement } from "react";

interface Props {}

export default function Navsidebar({}: Props): ReactElement {
  return (
    <nav id="sidebar" className="sidebar">
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="index.html">
          <span className="align-middle">MerchantWeb</span>
        </a>
        <ul className="sidebar-nav">
          <li className="sidebar-header">Manu</li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="index.html">
              <i className="align-middle" data-feather="sliders" />{" "}
              <span className="align-middle">Dashboard</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a
              data-target="#ui"
              data-toggle="collapse"
              className="sidebar-link collapsed"
            >
              <i className="align-middle" data-feather="briefcase" />{" "}
              <span className="align-middle">ร้านค้า</span>
            </a>
            <ul
              id="ui"
              className="sidebar-dropdown list-unstyled collapse "
              data-parent="#sidebar"
            >
              <li className="sidebar-item">
                <a className="sidebar-link" href="ui-alerts.html">
                  Alerts
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="ui-buttons.html">
                  Buttons
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="ui-cards.html">
                  Cards
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="ui-general.html">
                  General
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="ui-grid.html">
                  Grid
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="ui-modals.html">
                  Modals
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="ui-typography.html">
                  Typography
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
