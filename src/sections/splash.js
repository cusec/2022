import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { Button, Subtitle } from "components/elements";
import Logo from "components/logo";

const Title = styled.div`
    ${tw`flex flex-col md:flex-row leading-none gap-4`}
`;

const Header = styled.main`
    ${tw`h-screen flex flex-col justify-center`}
    width: 80vw;
`;

export default function Splash() {
    return (
        <Header>
            <Title>
                <Logo></Logo>
                <h1>CUSEC</h1>
            </Title>
                    
            <h2>Canadian University Software Engineering Conference</h2>
            <Subtitle>January | virtual x in person experience</Subtitle>

            <div className="flex justify-end">
                <Button className="custom-shadow"> sign up!</Button>
            </div>
        </Header>
    );
}