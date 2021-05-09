import React, { ReactElement, ReactNode } from "react";

interface Props {
  title: ReactNode;
  subTitle: ReactNode;
}

export default function CardItemSale(parm: Props): ReactElement {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="/imgs/CardProducts/product1.jpg"
        alt="Unsplash"
      />
      <div className="card-header text-center">
        <h5 className="card-title mb-0">{parm.title}</h5>
        <h5 className="card-title mb-0">{parm.subTitle}</h5>
      </div>
    </div>
  );
}
