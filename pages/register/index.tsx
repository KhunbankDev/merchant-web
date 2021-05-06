import React, { ReactElement } from "react";
import Register from "../../components/Card/CardRegister";
import LayoutLogin from "../../Layouts/Login/LayoutLogin";
interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <>
      <LayoutLogin title="Register">
        <Register />
      </LayoutLogin>
    </>
  );
}
