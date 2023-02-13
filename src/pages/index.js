import React from "react";

import Page from "./page";

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
        <Page>
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
        </Page>
    );
}
