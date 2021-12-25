import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import SpeakerBubble from "./speakerBubble";

import { SPEAKERS, SPEAKER_TIERS } from "constants/speakerInfo";
import { randNBoxMuller, LOW_PREFERRED_SKEW, HIGH_PREFERRED_SKEW } from "./rng";

const Section = styled.section`
    ${tw`min-h-screen w-full bg-secondary-highlight flex flex-col md:flex-row`}
    padding: 10vh 10vw;

    .SPEC, .PANEL {
        ${tw`inline-flex flex-col md:flex-row justify-center`}
    }
`;

/*
    To generate the bottom and left margins of each bubble to create the randomize effect. It's apparent that complete randomness leads to really ugly results so here's a solution to regulate it somewhat and make it seem "more" random.

    The way the algorithm works is the following for vertical margin.
    0. Instead of generating the number completely randomly, generate according to one of two distributions. One skews towards lower numbers and the other skews towards higher numbers.
    1. To start off, generate the offset of the first bubble with the lower skewing distribution.
    2. Then, for the second bubble, switch to the higher skewing distribution.
    3. Repeat steps 1 and 2 until all the bubbles are generated.
*/
const MB_OFFSETS = ["md:mb-0", "md:mb-4", "md:mb-8", "md:mb-12", "md:mb-16", "md:mb-20", "md:mb-24", "md:mb-28", "md:mb-32", "md:mb-36"];
const ML_OFFSETS = ["md:ml-0", "md:ml-2", "md:ml-4", "md:ml-6", "md:ml-8", "md:ml-10", "md:ml-12", "md:ml-14", "md:ml-16", "md:ml-18"];
const generateSmallBubbleOffsets = () => {
    const offsets = [];
    const totalSpeakers =  SPEAKERS[SPEAKER_TIERS.SPEC].length +  SPEAKERS[SPEAKER_TIERS.PANEL].length;
    let isLowPreferred = true;

    for (let i = 0; i < totalSpeakers; i++) {
        const skew = isLowPreferred ? LOW_PREFERRED_SKEW : HIGH_PREFERRED_SKEW;
        const yOffset = MB_OFFSETS[Math.floor(randNBoxMuller(0, MB_OFFSETS.length, skew))];
        const xOffset = ML_OFFSETS[Math.floor(Math.random() * ML_OFFSETS.length)];
        offsets.push(`${yOffset} ${xOffset}`);
        isLowPreferred = !isLowPreferred;
    }

    return offsets;
};

const BIG_OFFSETS = ["md:ml-0", "md:ml-4", "md:ml-8", "md:ml-12", "md:ml-16", "md:ml-20", "md:ml-24", "md:ml-28", "md:ml-32"];
const generateBigBubbleOffsets = () => {
    const offsets = [];
    const totalSpeakers = SPEAKERS[SPEAKER_TIERS.KEYNOTE].length;
    let isLowPreferred = true;

    for (let i = 0; i < totalSpeakers; i++) {
        const skew = isLowPreferred ? LOW_PREFERRED_SKEW : HIGH_PREFERRED_SKEW;
        const r = randNBoxMuller(0, BIG_OFFSETS.length, skew);
        const xOffset = BIG_OFFSETS[Math.floor(r)];
        const flexDir = r > Math.floor(BIG_OFFSETS.length / 2) ? "md:flex-row-reverse": "flex-row";
        offsets.push(`${xOffset} ${flexDir}`);
        isLowPreferred = !isLowPreferred;
    }

    return offsets;
};

export default function Speakers() {
    const smallBubbleOffsets = generateSmallBubbleOffsets();
    const bigBubbleOffsets = generateBigBubbleOffsets();

    return (
        <Section>
            <div className="inline-block m-8 md:sticky max-h-0 top-48 mb-32">
                <h2 className="text-xl font-bold">Speakers</h2>
                <p>Meet the professionals speaking this year.</p>
            </div>
            <div className="bubbles">
                {
                    SPEAKERS[SPEAKER_TIERS.KEYNOTE].map(({ name, role, company, img }, i) => (
                        <SpeakerBubble key={name} tier={SPEAKER_TIERS.KEYNOTE} name={name} role={role} company={company} img={img} offsetClasses={bigBubbleOffsets[i]} />
                    ))
                }
                <div className="small-bubbles">
                    {
                        SPEAKERS[SPEAKER_TIERS.SPEC].concat(SPEAKERS[SPEAKER_TIERS.PANEL])
                            .map(({ name, role, company, img }, i) => {
                                const tier = i < SPEAKERS[SPEAKER_TIERS.SPEC].length ? SPEAKER_TIERS.SPEC : SPEAKER_TIERS.PANEL;

                                return <SpeakerBubble key={name} tier={tier} name={name} role={role} company={company} img={img} offsetClasses={smallBubbleOffsets[i]} />;
                            })
                    }
                </div>
            </div>
        </Section>
    );
}