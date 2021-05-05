import React, { ReactElement, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title></title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
