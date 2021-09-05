import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";
import gsap from "gsap";

const Question = styled.span`
    color: ${props => props.isOpen ? "var(--primary)" : "var(--light)"}
`;

const Answer = styled.div`
    ${tw`relative h-0`}
    color: var(--light);

    .answer-line {
        ${tw`w-full h-full block absolute`}
        content: "";
        border-top: 1px var(--light) solid;

        /*transform: translateY(${props => props.isOpen ? "100%" : "0"});

        transition: transform .5s;*/
    }

    .answer-text {
        opacity: 0;
        /*opacity: ${props => props.isOpen ? "1" : "0"};

        transition: transform .5s, opacity .5s;*/
    }
`;

export default function FaqBox({ question, answer, customClassName }) {
    const [isOpen, setIsOpen] = useState(false);
    const [openBox, setOpenBox] = useState(null);

    const answerWrapperRef = useRef();
    const answerLineRef = useRef();
    const answerTextRef = useRef();

    useEffect(() => {
        const animation = gsap.timeline({
            paused: true,
            defaults: {
                duration: 0.25
            }
        })
            .to([answerLineRef.current], { y: "100%" })
            .to([answerTextRef.current], { opacity: 1 }, "-=0.25")
            .to([answerWrapperRef.current], { height: "auto" }, "-0.25");

        setOpenBox(animation);
    }, []);

    useLayoutEffect(() => {
        if (!openBox) return;
        isOpen ? openBox.play() : openBox.reverse();
    }, [isOpen]);

    return (
        <div className={customClassName} onClick={() => setIsOpen(!isOpen)}>
            <Question isOpen={isOpen}>{question}</Question>
            <Answer isOpen={isOpen} ref={answerWrapperRef}>
                <div className="answer-line" ref={answerLineRef}></div>
                <p className="answer-text" ref={answerTextRef}>{answer}</p>
            </Answer>
        </div>
    );
}

FaqBox.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    customClassName: PropTypes.string
};