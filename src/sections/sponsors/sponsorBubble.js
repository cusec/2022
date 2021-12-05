import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";
import gsap from "gsap";

import { SPONSOR_TIERS } from "constants/sponsorsInfo";

const BUBBLE_SIZES = {
    [SPONSOR_TIERS.GOLD]: "15rem",
    [SPONSOR_TIERS.SILVER]: "10rem",
    [SPONSOR_TIERS.BRONZE]: "5rem",
    [SPONSOR_TIERS.IN_KIND]: "5rem",
};

const Bubble = styled.div`
    width: ${props => BUBBLE_SIZES[props.tier]};
    height: ${props => BUBBLE_SIZES[props.tier]};

    transition: opacity .1s;

    &:hover {
        opacity: 0.5;
    }
`;

export default function SponsorBubble({ tier, name, img, link }) {
    let floatEffect = null;
    const bubbleRef = useRef();

    useEffect(() => {
        floatEffect = gsap.timeline({
            repeat: -1,
            delay: Math.random() * 2,
            defaults: {
                duration: 1,
                repeatDelay: 0
            },
            yoyo: true
        })
            .to(bubbleRef.current, {
                ease: "sine.inOut",
                left: Math.random() * 10,
                y: Math.random() * 2 - 7,
            })
        ;
    }, []);

    return (
        <Bubble tier={tier} ref={bubbleRef}>
            <a className="h-full w-full flex justify-center items-center" href={link}>
                <img className="max-h-full" src={img} alt={name} />
            </a>
        </Bubble>
    );
}

SponsorBubble.propTypes = {
    tier: PropTypes.oneOf(Object.keys(SPONSOR_TIERS)).isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    link: PropTypes.string
};