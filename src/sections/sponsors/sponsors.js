import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import SponsorBubble from "./sponsorBubble";

import { SPONSORS } from "constants/sponsorsInfo";

const Section = styled.section`
    ${tw`min-h-screen w-full bg-secondary-highlight`}
    padding: 10vh 10vw;

    .GOLD, .SILVER, .BRONZE, .IN_KIND {
        ${tw`flex justify-center md:justify-start gap-8 flex-wrap relative my-8`}
    }

    .GOLD {
    }

    .SILVER {
    }

    .BRONZE {
        ${tw`md:float-left`}
    }

    .IN_KIND {
        ${tw`md:mr-12`}
    }
`;

export default function Sponsors() {
    return (
        <Section id="sponsors">
            <div className="bubbles">
                {
                    Object.keys(SPONSORS).map(tier => {
                        const bubbles = SPONSORS[tier].map(({ name, img, link }) => (
                            <SponsorBubble key={name} tier={tier} name={name} img={`/sponsors/${img}`} link={link} />
                        ));
                
                        return (
                            <div className={tier} key={tier}>
                                {bubbles}
                            </div>
                        );
                    })
                }
            </div>
            <div className="inline-block m-8 float-right">
                <h2 className="text-xl sm:text-2xl font-bold">Sponsors</h2>
                <p>Meet the companies making CUSEC possible.</p>
            </div>
        </Section>
    );
}