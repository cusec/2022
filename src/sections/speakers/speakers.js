import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import SpeakerBubble from "./speakerBubble";

import { SPEAKERS } from "constants/speakerInfo";

const Section = styled.section`
    ${tw`min-h-screen w-full bg-secondary-highlight flex`}
    padding: 10vh 10vw;
`;

export default function Speakers() {
    return (
        <Section>
            <div className="inline-block m-8 sticky max-h-0 top-48 mb-32 ">
                <h2 className="text-xl font-bold">Speakers</h2>
                <p>Meet the professionals speaking this year.</p>
            </div>
            <div className="bubbles">
                {
                    Object.keys(SPEAKERS).map(tier => {
                        const bubbles = SPEAKERS[tier].map(({ name, role, company, img }) => (
                            <SpeakerBubble key={name} tier={tier} name={name} role={role} company={company} img={img} />
                        ));
        
                        return (
                            <React.Fragment key={tier}>
                                {bubbles}
                            </React.Fragment>
                        );
                    })
                }
            </div>
        </Section>
    );
}