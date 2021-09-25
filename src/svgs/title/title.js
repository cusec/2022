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

export default function TitleSVG(props) {
    useEffect(() => {
        const screenSizeSelector = window.matchMedia("(min-width: 768px)") ? ".desktop" : ".mobile";

        gsap.timeline({
            defaults: {
                duration: 1.5
            }
        })
            .fromTo(`${screenSizeSelector} .cmhr`, {
                y: "100%"
            }, {
                y: "0%"
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
            <TitleDesktop {...props} className="hidden md:block" />
            <TitleMobile {...props} className="block md:hidden" />
        </>
    );
}

TitleSVG.propTypes = {
    className: PropTypes.string
};