import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { A } from "components/elements";
import FaqBox from "./faqBox";

import { FaqQuestions } from "constants/faqQuestions";

const Container = styled.section`
    ${tw`min-h-screen flex flex-col justify-center overflow-hidden gap-12`}
    color: var(--light);
    padding: 5rem 10vw;

    background-color: var(--dark);
`;

const FaqBoxes = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 640px) {
        grid-template-columns: 1fr 1fr;
    }

    gap: 1rem;
`;

export default function Faq() {
    const INFO_EMAIL = "info@cusec.com";

    return (
        <Container id="faq">
            <div>
                <h2 className="primary-coloured">Got questions?</h2>
                <p>
                Can't find what you're looking for? Send us an email to <A href={`mailto:${INFO_EMAIL}`} lineColour="var(--primary)" className="primary-coloured">{INFO_EMAIL}</A>
                </p>
            </div>
            <FaqBoxes>
                {FaqQuestions.map(({ question, answer }) => (
                    <FaqBox key={question} question={question} answer={answer} />
                ))}
            </FaqBoxes>

        </Container>
    );
}