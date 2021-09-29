import React from "react";
import PropTypes from "prop-types";

export default function Decagon({ colour, className }) {
    return (
        <svg viewBox="0 0 366 387" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M184.621 13.7496L288.941 49.0303L352.712 139.669L351.402 251.112L285.592 340.587L180.471 373.976L76.1511 338.696L12.4524 248.13L13.7628 136.686L79.5726 47.2117L184.621 13.7496ZM184.766 0.728516L71.9288 36.5912L1.38708 132.54L0.00390625 251.912L68.3616 349.098L180.326 386.998L293.163 351.135L363.705 255.186L365.088 135.814L296.73 38.628L184.766 0.728516Z" fill={colour}/>
        </svg>
    );
}

Decagon.propTypes = {
    colour: PropTypes.string.isRequired,
    className: PropTypes.string
};