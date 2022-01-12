import React from "react";
import PropTypes from "prop-types";

import { SPEAKER_TIERS } from "constants/speakerInfo";

const BUBBLE_SIZES = {
    [SPEAKER_TIERS.KEYNOTE]: {
        w: "w-36 md:w-44",
        h: "md:h-44"
    },
    [SPEAKER_TIERS.SPEC]: {
        w: "w-32 md:w-36",
        h: "md:h-36"
    },
    [SPEAKER_TIERS.PANEL]: {
        w: "w-32 md:w-36",
        h: "md:h-36"
    }
};

const KeynoteBubble = ({ name, role, company, img, offsetClasses }) => {
    return (
        <div className={`flex items-center gap-4 ${BUBBLE_SIZES.KEYNOTE["h"]} m-4 ${offsetClasses}`}>
            <div className={`${BUBBLE_SIZES.KEYNOTE["w"]} ${BUBBLE_SIZES.KEYNOTE["h"]} rounded-full bg-light shadow overflow-hidden flex-none`}>
                <img src={`/speakers/${img}`} alt={name} />
            </div >
            <div>
                <span className="font-bold text-lg">{name}</span>
                <br />
                {role}, {company}
            </div>
        </div>
    );
};

KeynoteBubble.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    offsetClasses: PropTypes.string
};

const NormalBubble = ({ tier, name, role, company, img, offsetClasses }) => {
    return (
        <div
            className={`inline-block relative box-content m-2 ${BUBBLE_SIZES[tier]["w"]} md:h-48 ${offsetClasses}`}>
            <div className={`inline-flex flex-col items-center gap-2 ${BUBBLE_SIZES[tier]["w"]} md:absolute`} >
                <div className={`rounded-full ${BUBBLE_SIZES[tier]["w"]} ${BUBBLE_SIZES[tier]["h"]} bg-light shadow overflow-hidden`}>
                    <img src={`/speakers/${img}`} alt={name} />
                </div>
                <p className="text-sm text-center">
                    <span className="font-bold">{name}</span>
                    <br />
                    {role}, {company}
                </p>
            </div>
        </div>
    );
};

NormalBubble.propTypes = {
    tier: PropTypes.oneOf(Object.keys(SPEAKER_TIERS)).isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    offsetClasses: PropTypes.string
};

export default function SpeakerBubble({ tier, name, role, company, img, offsetClasses }) {
    return (
        <>
            {tier === SPEAKER_TIERS.KEYNOTE ?
                <KeynoteBubble name={name} role={role} company={company} img={img} offsetClasses={offsetClasses} /> :
                <NormalBubble tier={tier} name={name} role={role} company={company} img={img} offsetClasses={offsetClasses} />
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
    offsetClasses: PropTypes.string
};