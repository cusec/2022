import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import Nav from "../components/nav";
import Cursor from "../components/cursor";
import Footer from "sections/footer";

export default function Page({ children }) {
    return (
        <>
            <Head>
                <title>CUSEC 2022</title>
                <meta name="description" content="Canadian University Software Engineering Conference" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <Cursor></Cursor>
            
            <Nav></Nav>

            <main className="flex flex-col justify-center items-center min-h-screen">
                {children}
                <Footer />
            </main>
        </>
    );
}

Page.propTypes = {
    children: PropTypes.element
};
