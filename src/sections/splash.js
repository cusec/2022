import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { Button, Subtitle, A } from "components/elements";
import TitleSVG from "../svgs/title/title";

const Content = styled.div`
    ${tw`p-12 h-screen sm:h-auto flex flex-col`}
    max-width: 100vw;
    background: rgba(249, 222, 44, 0.25);
    box-shadow: 0px 0px 8px var(--shadow);
    backdrop-filter: blur(0.5rem);
`;

const SPEAKERS_URL = "https://u023sc7h30b.typeform.com/to/KJe3hACf";

export default function Splash() {
    return (
        <header className="h-screen flex flex-col justify-center">
            <Content>
                <title className="flex flex-col sm:flex-row leading-none sm:gap-4 items-center">
                    <img src="/logo.svg" alt="" className="h-24"/>
                    <h1 className="text-2xl font-bold">CUSEC</h1>
                </title>
                        
                <h2 className="text-lg md:text-xl">Canadian University Software Engineering Conference</h2>
                <Subtitle>January 14-16 | Virtual and in-person experience</Subtitle>

                <div className="flex flex-col-reverse sm:flex-row justify-end items-center gap-4 mt-auto">
                    <A href={SPEAKERS_URL} className="font-bold">Speak at CUSEC</A>
                    <Button className="custom-shadow w-full sm:w-auto">Sponsor us</Button>
                </div>
            </Content>

            <TitleSVG/>
        </header>
    );
}