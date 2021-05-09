import React, { ReactElement, ReactNode } from "react";
import CardItemSale from "../../components/Card/CardItemSale";
interface Props {
  title: ReactNode;
}

export default function CardGroupItemSale(parm: Props): ReactElement {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">{parm.title}</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-sm-3">
                <CardItemSale title="สินค้า A" subTitle="ยอดขาย 20 รายการ" />
              </div>
              <div className="col-12 col-sm-3">
                <CardItemSale title="สินค้า B" subTitle="ยอดขาย 20 รายการ" />
              </div>
              <div className="col-12 col-sm-3">
                <CardItemSale title="สินค้า C" subTitle="ยอดขาย 20 รายการ" />
              </div>
              <div className="col-12 col-sm-3">
                <CardItemSale title="สินค้า D" subTitle="ยอดขาย 20 รายการ" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
