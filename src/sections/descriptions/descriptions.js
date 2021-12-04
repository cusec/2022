import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Blurb from "./blurb";

const Section = styled.section`
    ${tw`min-h-screen lg:h-screen w-full flex flex-col justify-center items-center`}
    background-color: var(--dark);
    color: var(--light);
    padding: 10vh 0;
`;

export default function Descriptions() {
    return (
        <Section id="about">
            <Blurb />
        </Section>
    );
}