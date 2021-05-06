import React, { ReactElement } from "react";
import LayoutAdmin from "../../Layouts/admin/LayoutAdmin";
import BreadHead from "../../components/Breadcrumb/BreadHead";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <LayoutAdmin title="Dashborad">
      <BreadHead
        title="Dashborad"
        Active="Dashborad"
        Item1="Dashborad"
        Item1Href="/"
        Item2=""
        Item2Href=""
        Item3=""
        Item3Href=""
      />
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Sales</h5>
              <h1 className="mt-1 mb-3">2.382</h1>
              <div className="mb-1">
                <span className="text-danger">
                  {" "}
                  <i className="mdi mdi-arrow-bottom-right" /> -3.65%{" "}
                </span>
                <span className="text-muted">Since last week</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Visitors</h5>
              <h1 className="mt-1 mb-3">14.212</h1>
              <div className="mb-1">
                <span className="text-success">
                  {" "}
                  <i className="mdi mdi-arrow-bottom-right" /> 5.25%{" "}
                </span>
                <span className="text-muted">Since last week</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Earnings</h5>
              <h1 className="mt-1 mb-3">$21.300</h1>
              <div className="mb-1">
                <span className="text-success">
                  {" "}
                  <i className="mdi mdi-arrow-bottom-right" /> 6.65%{" "}
                </span>
                <span className="text-muted">Since last week</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Orders</h5>
              <h1 className="mt-1 mb-3">64</h1>
              <div className="mb-1">
                <span className="text-danger">
                  {" "}
                  <i className="mdi mdi-arrow-bottom-right" /> -2.25%{" "}
                </span>
                <span className="text-muted">Since last week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}
