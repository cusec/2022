import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { Button, Subtitle } from "components/elements";
import TitleSVG from "../svgs/title/title";

const Title = styled.div`
    ${tw`flex flex-col md:flex-row leading-none gap-4 items-center`}
`;

const Header = styled.header`
    ${tw`h-screen flex flex-col justify-center`}
`;

const Content = styled.div`
    ${tw`p-12 h-screen md:h-auto`}
    max-width: 100vw;
    background: rgba(249, 222, 44, 0.25);
    box-shadow: 0px 0px 8px var(--shadow);
    backdrop-filter: blur(0.5rem);
`;

export default function Splash() {
    return (
        <Header>
            <Content>
                <Title>
                    <img src="/logo.svg" className="h-24"/>
                    <h1>CUSEC</h1>
                </Title>
                        
                <h2>Canadian University Software Engineering Conference</h2>
                <Subtitle>January | virtual x in person experience</Subtitle>

                <div className="flex justify-end">
                    <Button className="custom-shadow"> sign up!</Button>
                </div>
            </Content>

            <TitleSVG/>
        </Header>
    );
}