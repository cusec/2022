import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { A } from "components/elements";

import { FACEBOOK, INSTAGRAM, LINKEDIN, YOUTUBE } from "constants/socialMediaLinks";

const Container = styled.section`
    ${tw`grid items-center w-full gap-4`}

    color: var(--light);
    padding: 5rem 10vw;

    background-color: var(--dark);

    .name {
        grid-column: 1;
        grid-row: 1;
    }

    .social-media {
        grid-column: 2;
        grid-row: 1;

        & img {
            ${tw`w-6 h-6`}
        }
    }

    .code-of-conduct {
        grid-column: 2;
        grid-row: 2;
    }
`;

export default function Footer() {
    return (
        <Container>
            <span className="name">
                <img src="/logoColourless.svg" alt="" className="inline" /> CUSEC 2022
            </span>
            <span className="social-media flex gap-6 items-center justify-end">
                <a href={FACEBOOK}>
                    <img src="/footer/facebook.svg" />
                </a>
                <a href={YOUTUBE}>
                    <img src="/footer/youtube.svg" />
                </a>
                <a href={INSTAGRAM}>
                    <img src="/footer/instagram.svg" />
                </a>
                <a href={LINKEDIN}>
                    <img src="/footer/linkedin.svg" />
                </a>
            </span>
            <span className="code-of-conduct flex gap-4 items-center justify-end">
                {/*<A lineColour="var(--light)">Open Source</A>
                <A lineColour="var(--light)">Attributions</A>*/}
                <A lineColour="var(--light)">Code of Conduct</A>
            </span>
        </Container>
    );
}