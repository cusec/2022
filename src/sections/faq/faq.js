import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { A } from "components/elements";
import FaqBox from "./faqBox";

import { FaqQuestions } from "constants/faqQuestions";

const Container = styled.section`
    ${tw`h-screen flex flex-col justify-center`}
    color: var(--light);
    gap: 5.25rem;
    padding: 0 10vw;

    background-color: var(--dark);
`;

const FaqBoxes = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;

export default function Faq() {
    const INFO_EMAIL = "info@cusec.com";

    return (
        <Container id="faq">
            <h2>Got questions?</h2>
            <FaqBoxes>
                {FaqQuestions.map(({ question, answer }) => (
                    <FaqBox key={question} question={question} answer={answer} />
                ))}
            </FaqBoxes>
            <p>
                Can't find what you're looking for? Send us an email to <A href={`mailto:${INFO_EMAIL}`}>{INFO_EMAIL}</A>
            </p>

        </Container>
    );
}