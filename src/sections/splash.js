import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { Button, Subtitle } from "components/elements";
import Logo from "components/logo";

const Title = styled.div`
    ${tw`flex leading-none h-24`}

    *:last-child {
        ${tw`ml-4`}
    }
`;

export default function Splash() {
    return (
        <header className="h-screen flex flex-col justify-center">
            <Title>
                <Logo></Logo>
                <h1>CUSEC</h1>
            </Title>
                    
            <h2>Canadian University Software Engineering Conference</h2>
            <Subtitle>January | virtual x in person experience</Subtitle>

            <div className="flex justify-end">
                <Button className="custom-shadow"> sign up!</Button>
            </div>
        </header>
    );
}