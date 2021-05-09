import React, { ReactElement, ReactNode } from "react";
import Link from "next/link";

interface Props {
  title: ReactNode;
  Item1: ReactNode;
  Item1Href: ReactNode;
  Item2: ReactNode;
  Item2Href: ReactNode;
  Item3: ReactNode;
  Item3Href: ReactNode;
  Active: ReactNode;
}

export default function BreadHead(parm: Props): ReactElement {
  const CheckItems = (item, active, href) => {
    if (item === active) {
      return (
        <li className="breadcrumb-item active" aria-current="page">
          {item}
        </li>
      );
    } else {
      if (item === "") {
        return;
      } else {
        return (
          <li className="breadcrumb-item">
            <Link href={href}>
              <a>{item}</a>
            </Link>
          </li>
        );
      }
    }
  };

  return (
    <div className="row mb-2 mb-xl-3">
      <div className="col-auto d-none d-sm-block">
        <h3>
          <strong>{parm.title}</strong>
        </h3>
      </div>
      <div className="col-auto ml-auto text-right mt-n1">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent p-0 mt-1 mb-0">
            {CheckItems(parm.Item1, parm.Active, parm.Item1Href)}
            {CheckItems(parm.Item2, parm.Active, parm.Item2Href)}
            {CheckItems(parm.Item3, parm.Active, parm.Item3Href)}
          </ol>
        </nav>
      </div>
    </div>
  );
}
