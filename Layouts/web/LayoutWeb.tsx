import React, { ReactElement, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

import { Container } from "react-bootstrap";

interface Props {
  children: ReactNode;
  title: ReactNode;
}

export default function LayoutWeb({ children, title }: Props): ReactElement {
  return (
    <>
      <Header />
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
      <Footer />
    </>
  );
}
