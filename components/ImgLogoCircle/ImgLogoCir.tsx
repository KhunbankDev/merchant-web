import React, { ReactElement } from "react";
import Image from "react-bootstrap/Image";
interface Props {}

export default function ImgLogoCir({}: Props): ReactElement {
  return (
    <>
      <Image
        src="/imgs/Logo/logo-merchant.png"
        roundedCircle
        style={{
          width: "100px",
          backgroundColor: "#e2e2e2",
        }}
      />
    </>
  );
}
