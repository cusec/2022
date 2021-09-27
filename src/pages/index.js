import React from "react";
import Head from "next/head";

import Nav from "components/nav";
import Cursor from "components/cursor";
import Scroll from "components/scroll";

import Descriptions from "sections/descriptions";
import Splash from "sections/splash";

export default function Home() {
    return (
        <>
            <Head>
                <title>CUSEC</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Cursor></Cursor>
            <Scroll />
            
            <Nav></Nav>

            <main className="flex flex-col justify-center items-center min-h-screen">
                <Splash />
                <Descriptions />
                <Descriptions />
                <Descriptions />
                <Descriptions />
            </main>
        </>
    );
}
