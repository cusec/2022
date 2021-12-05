import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import SponsorBubble from "./sponsorBubble";

import { SPONSORS, SPONSOR_TIERS } from "constants/sponsorsInfo";

const Section = styled.section`
    ${tw`min-h-screen w-full bg-secondary-highlight`}
    padding: 10vh 10vw;

    .GOLD, .SILVER, .BRONZE, .IN_KIND {
        ${tw`flex gap-4 justify-end relative`}
    }

    .GOLD {
        ${tw`inline-flex ml-auto mr-4`}
    }

    .SILVER, .BRONZE, .IN_KIND {
        ${tw`flex my-4`}
    }

    .BRONZE {
        ${tw`mr-28`}
    }

    .IN_KIND {
        ${tw`mr-12`}
    }
`;

const generateTierRow = (tier, tierData, divClassName) => {
    const bubbles = tierData.map(({ name, img, link }) => (
        <SponsorBubble key={name} tier={tier} name={name} img={img} link={link} />
    ));

    return (
        <div className={tier} key={tier}>
            {bubbles}
        </div>
    );
}

export default function Sponsors() {
    return (
        <Section>
            <div className="flex">
                <div className="inline-block m-8">
                    <h2 className="text-2xl font-bold">Sponsors</h2>
                    <p>Meet the companies making CUSEC possible.</p>
                </div>
                {
                    generateTierRow(SPONSOR_TIERS.GOLD, SPONSORS[SPONSOR_TIERS.GOLD])
                }
            </div>
            {
                Object.keys(SPONSORS).slice(1).map(tier => generateTierRow(tier, SPONSORS[tier]))
            }
        </Section>
    );
}