import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import gsap from "gsap";

import { SPONSOR_TIERS } from "constants/sponsorsInfo";

const BUBBLE_SIZES = {
    [SPONSOR_TIERS.GOLD]: "w-40 h-40 md:w-60 md:h-60",
    [SPONSOR_TIERS.SILVER]: "w-32 h-32 md:w-40 md:h-40",
    [SPONSOR_TIERS.BRONZE]: "w-20",
    [SPONSOR_TIERS.IN_KIND]: "w-20",
};

const Bubble = styled.div`
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
                y: Math.random() * 5 - 7,
            })
        ;
    }, []);

    return (
        <Bubble tier={tier} ref={bubbleRef} className={BUBBLE_SIZES[tier]}>
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