import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const CircleImg = styled.img`
    ${tw`absolute top-0 left-0 fixed`}
    transition: transform 0.1s ease 0s;
    z-index: var(--z-cursor);
    pointer-events: none;

    @media (hover: none) {
        display: none;
    }
`;

const Circle = forwardRef((_, ref) => {
    const el = useRef();
    useImperativeHandle(ref, () => ({
        moveTo: (x, y) => {
            el.current.style.transform = `translate(${x}px, ${y}px)`;
        }
    }), []);
    return <CircleImg src="/cursorOuterDefault.svg" alt="" ref={el} />;
});

Circle.displayName = "Circle";

export default function Cursor() {
    const circleRef = useRef();

    useEffect(() => {
        const moveCursorOuter = ({ clientX, clientY }) => {
            circleRef.current.moveTo(clientX - 12, clientY - 12);
        };

        window.addEventListener("mousemove", moveCursorOuter);

        return () => window.removeEventListener("mousemove", moveCursorOuter);
    }, []);

    return <Circle id="cursorOuter" ref={circleRef} aria-hidden="true" />;
}



