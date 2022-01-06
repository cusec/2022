import React from "react";
import Head from "next/head";

import Nav from "../components/nav";
import Cursor from "../components/cursor";

import Splash from "sections/splash";
import DetailBoxes from "sections/detailBoxes/detailBoxes";
import Locations from "sections/locations";
import Descriptions from "sections/descriptions/descriptions";
import Testimonials from "sections/testimonials/testimonials";
import Tickets from "sections/tickets/tickets";
import Sponsors from "sections/sponsors/sponsors";
import Speakers from "sections/speakers/speakers";
import Faq from "sections/faq/faq";
import Footer from "sections/footer";

export default function Home() {
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
                <Splash />
                <DetailBoxes />
                <Locations />
                <Descriptions />
                <Testimonials />
                <Tickets/>
                <Sponsors />
                <Speakers />
                <Faq />
                <Footer />
            </main>
        </>
    );
}
