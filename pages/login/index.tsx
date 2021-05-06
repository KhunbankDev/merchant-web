import React, { ReactElement } from "react";
import Login from "../../components/Card/CardLogin";
import LayoutLogin from "../../Layouts/Login/LayoutLogin";
interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <>
      <LayoutLogin title="Login Merchant Shop">
        <Login />
      </LayoutLogin>
    </>
  );
}
