import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";
import { gsap } from "gsap";

import TitleDesktop from "./titleDesktop";
import TitleMobile from "./titleMobile";

export const Svg = styled.svg`
    ${tw`absolute left-0 w-full`}
    top: 100%;
    transform: translateY(-100%);
    z-index: var(--z-title-illus);

    .a * {
        fill: red;
    }
`;

const Background = styled.div`
    ${tw`absolute left-0 top-0 w-full h-full overflow-hidden`}
    z-index: var(--z-title-illus);

    background: var(--secondary);

    &::after {
        ${tw`absolute w-full h-full`}
        content: '';
        background: radial-gradient(circle at bottom, var(--primary) 0%, transparent 60%);
        transform-origin: bottom;

        @keyframes sunrise {
            from {
                transform: scale(0);
            }
            to { 
                transform: scale(1);
            }
        }

        animation: sunrise 1s;
    }
`;

export default function TitleSVG(props) {
    useEffect(() => {
        const screenSizeSelector = window.matchMedia("(min-width: 768px)").matches ? ".desktop" : ".mobile";

        gsap.timeline({
            defaults: {
                duration: 1.5
            }
        })
            .fromTo(`${screenSizeSelector} .cmhr`, {
                y: "100%"
            }, {
                y: "0%",
                delay: "0.5"
            })
            .fromTo(`${screenSizeSelector} .toronto`, {
                y: "100%"
            }, {
                y: "0%",
                delay: "-1"
            })
            .fromTo(`${screenSizeSelector} .parliament`, {
                y: "100%"
            }, {
                y: "0%",
                delay: "-1"
            });
    }, []);

    return (
        <>
            <Background />
            <TitleDesktop {...props} className="hidden md:block" />
            <TitleMobile {...props} className="block md:hidden" />
        </>
    );
}

TitleSVG.propTypes = {
    className: PropTypes.string
};