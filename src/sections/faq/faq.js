import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { A } from "components/elements";
import FaqBox from "./faqBox";

const Container = styled.section`
    ${tw`h-screen flex flex-col justify-center`}

    background-color: var(--dark);
`;

export default function Faq() {
    const INFO_EMAIL = "info@cusec.com";

    return (
        <Container id="faq">
            <h2>Got questions?</h2>
            <div>
                <FaqBox question={"question 1"} answer={"question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer question 1 answer "} />
            </div>
            <p>
                Can't find what you're looking for? Send us an email to <A href={`mailto:${INFO_EMAIL}`}>{INFO_EMAIL}</A>
            </p>

        </Container>
    );
}