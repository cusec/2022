import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Canada from "svgs/canada";

const CITIES = [
    "Ottawa, ON",
    "Waterloo, ON",
    "Montreal, QC",
    "Calgary, AB",
    "Winnipeg, MB"
];

const Section = styled.section`
    ${tw`h-screen flex flex-col justify-center relative overflow-hidden`}

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
`;

export default function Locations() {
    return (
        <Section>
            <Canada className="map" />
            <Subsection>
                <h1>Join us this year in person or virtually</h1>
                <Cities>{CITIES.map(city => <span key={city} className="city-name">{city}</span>)}</Cities>
            </Subsection>
        </Section>
    );
}