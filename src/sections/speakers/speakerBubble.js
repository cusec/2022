import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";

import { SPEAKER_TIERS } from "constants/speakerInfo";

const BUBBLE_SIZES = {
    [SPEAKER_TIERS.KEYNOTE]: {
        w: "w-36 md:w-44",
        h: "h-36 md:h-44"
    },
    [SPEAKER_TIERS.SPEC]: {
        w: "w-32 md:w-36",
        h: "h-32 md:h-36"
    },
    [SPEAKER_TIERS.PANEL]: {
        w: "w-32 md:w-36",
        h: "h-32 md:h-36"
    }
};

const Bubble = styled.div`
    ${tw`gap-2 items-center`};
`;

const KeynoteBubble = ({ name, role, company, img }) => {

    return (
        <Bubble className={`flex ${BUBBLE_SIZES.KEYNOTE["h"]} m-4`}>
            <div className={`rounded-full ${BUBBLE_SIZES.KEYNOTE["w"]} ${BUBBLE_SIZES.KEYNOTE["h"]} bg-light shadow-md`} style={{ marginLeft: `${Math.random() * 35}%` }}>
            </div>
            <div>
                Keynote
                <br />
                {name}
                <br />
                {role}@{company}
            </div>
        </Bubble>
    );
};

KeynoteBubble.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

const NormalBubble = ({ tier, name, role, company, img }) => {
    return (
        <div className={`inline-block relative box-content m-2 py-6 ${BUBBLE_SIZES[tier]["w"]} h-44 md:h-48`} style={{ paddingLeft: `${Math.random() * 4}rem` }}>
            <Bubble className={`inline-flex flex-col ${BUBBLE_SIZES[tier]["w"]} absolute`} style={{ top: `${Math.random() * 4}rem` }}>
                {/*<div className={`${BUBBLE_SIZES[tier]["w"]}`}>*/}
                <div className={`rounded-full ${BUBBLE_SIZES[tier]["w"]} ${BUBBLE_SIZES[tier]["h"]} bg-light shadow-md`}>
                </div>
                <p className="text-sm text-center">
                    {name}, {role}@{company}
                </p>
            </Bubble>
        </div>
    );
};

NormalBubble.propTypes = {
    tier: PropTypes.oneOf(Object.keys(SPEAKER_TIERS)).isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

export default function SpeakerBubble({ tier, name, role, company, img }) {
    return (
        <>
            {tier === SPEAKER_TIERS.KEYNOTE ?
                <KeynoteBubble name={name} role={role} company={company} img={img} /> :
                <NormalBubble tier={tier} name={name} role={role} company={company} img={img} />
            }
        </>
    );
}

SpeakerBubble.propTypes = {
    tier: PropTypes.oneOf(Object.keys(SPEAKER_TIERS)).isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};