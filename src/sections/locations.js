import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Canada from "svgs/canada";

import { CITIES } from "constants/cities";

// Todo: move z-index to globals.css
const Section = styled.section`
    ${tw`h-screen flex flex-col justify-center relative overflow-hidden z-0`}
    background-color: var(--secondary-highlight);

    .map {
        ${tw`absolute`}
        transform: rotate(-15deg);
        bottom: -15vh;
        right: 0vw;
        z-index: -10;
        height: 90vh;
    }
`;

// Todo: rename one of this or CITIES later when it becomes more clear what this section will be
const Cities = styled.section`
    .city-name {
        :not(:first-child)::before {
            ${tw`m-3`}
            content: "|";
        }
    }
`;

const Subsection = styled.div`
    margin: 0 10vw;
    z-index: 0;
`;

export default function Locations() {
    const [hovered, setHovered] = useState(null);

    return (
        <Section>
            <Canada className="map" hovered={hovered} />
            <Subsection>
                <h1>This year, join us in person and virtually</h1>
                <Cities>{Object.values(CITIES).map(({ name: city, province }) => <span key={city} className="city-name" onMouseOver={() => setHovered(province)} onMouseLeave={() => setHovered(null)}>{city}</span>)}</Cities>
                <span>Online</span>
            </Subsection>
        </Section>
    );
}