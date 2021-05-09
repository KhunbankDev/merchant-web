import React, { ReactElement, ReactNode } from "react";
import dynamic from "next/dynamic";

import NavSidebar from "./Navsidebar";
import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
interface Props {
  title: ReactNode;
  children: ReactNode;
}

const LayoutAdmin = function (parm: Props): ReactElement {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{parm.title}</title>
      </Head>
      <div className="wrapper">
        <NavSidebar />
        <div className="main">
          <Navbar />
          <main className="content">
            <div className="container-fluid p-0">{parm.children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
