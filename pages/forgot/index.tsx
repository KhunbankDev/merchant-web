import React, { ReactElement } from "react";
import Forgot from "../../components/Card/CardForgot";
import LayoutLogin from "../../Layouts/Login/LayoutLogin";
interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <>
      <LayoutLogin title="Forgot">
        <Forgot />
      </LayoutLogin>
    </>
  );
}
