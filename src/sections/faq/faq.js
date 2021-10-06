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
    ${tw`flex flex-col gap-4 flex-1`}
`;

export default function Faq() {
    const QuestionEls = FaqQuestions.map(({ question, answer }) => (
        <FaqBox key={question} question={question} answer={answer} />
    ));
    const leftHalf = QuestionEls.slice(0, Math.ceil(FaqQuestions.length / 2));
    const rightHalf = QuestionEls.slice(Math.ceil(FaqQuestions.length / 2));

    return (
        <Container id="faq">
            <div>
                <h2 className="text-primary text-xl mb-6">Got questions?</h2>
                <p>
                Can't find what you're looking for? Send us an email to {" "}
                    <A
                        href={`mailto:${EMAIL}`}
                        lineColour="var(--primary)"
                        className="text-primary"
                    >{EMAIL}</A> {" "}
                or contact us through our official {" "}
                    <A
                        href={FACEBOOK}
                        lineColour="var(--primary)"
                        className="text-primary"
                    >
                        Facebook
                    </A>
                , {" "}
                    <A
                        href={INSTAGRAM}
                        lineColour="var(--primary)"
                        className="text-primary"
                    >
                        Instagram
                    </A> {" "} or {" "}
                    <A
                        href={LINKEDIN}
                        lineColour="var(--primary)"
                        className="text-primary"
                    >
                        LinkedIn
                    </A> {" "} accounts!
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <FaqBoxes>
                    {leftHalf}
                </FaqBoxes>
                <FaqBoxes>
                    {rightHalf}
                </FaqBoxes>
            </div>
        </Container>
    );
}