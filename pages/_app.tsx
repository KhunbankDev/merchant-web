// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "../public/adminkit/dist/css/app.css";

// import "../styles/assets/adminlte3/plugins/fontawesome-free/css/all.css";
// import "../styles/assets/adminlte3/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css";
// import "../styles/assets/adminlte3/dist/css/adminlte.min.css";

import { wrapper } from "../redux";

import React from "react";

interface Props extends AppProps {
  store: any;
}

function MyApp({ Component, pageProps, store }: Props) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default wrapper.withRedux(MyApp);
