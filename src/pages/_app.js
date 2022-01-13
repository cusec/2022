import React from "react";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "../styles/globals.css";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}


export default MyApp;
