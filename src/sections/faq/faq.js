import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { A } from "components/elements";
import FaqBox from "./faqBox";

import { FaqQuestions } from "constants/faqQuestions";
import { EMAIL, FACEBOOK, INSTAGRAM, LINKEDIN } from "constants/socialMediaLinks";

const Container = styled.section`
    ${tw`min-h-screen flex flex-col justify-start overflow-hidden gap-12`}
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
    return (
        <Container id="faq">
            <div>
                <h2 className="primary-coloured text-xl mb-6">Got questions?</h2>
                <p>
                Can't find what you're looking for? Send us an email to {" "}
                    <A
                        href={`mailto:${EMAIL}`}
                        lineColour="var(--primary)"
                        className="primary-coloured"
                    >{EMAIL}</A> {" "}
                or contact us through our official {" "}
                    <A
                        href={FACEBOOK}
                        lineColour="var(--primary)"
                        className="primary-coloured"
                    >
                        Facebook
                    </A>
                , {" "}
                    <A
                        href={INSTAGRAM}
                        lineColour="var(--primary)"
                        className="primary-coloured"
                    >
                        Instagram
                    </A> {" "} or {" "}
                    <A
                        href={LINKEDIN}
                        lineColour="var(--primary)"
                        className="primary-coloured"
                    >
                        LinkedIn
                    </A> {" "} accounts!
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