import React from "react";
import Head from "next/head";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav";
import Cursor from "../components/cursor";

import Descriptions from "sections/descriptions";
import Splash from "sections/splash";
import Faq from "sections/faq/faq";


export default function Home() {
    return (
        <>
            <Head>
                <title>CUSEC</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Cursor></Cursor>
            
            <Nav></Nav>

            <main className={styles.container}>
                <Splash />
                <Descriptions />
                <Faq />
            </main>
        </>
    );
}
