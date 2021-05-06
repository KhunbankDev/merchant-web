import React, { ReactElement, ReactNode } from "react";
import Head from "next/head";

interface Props {
  children: ReactNode;
  title: ReactNode;
}

export default function LayoutLogin({ children, title }: Props): ReactElement {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}
