import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Decagon({ colour, width, className, pathClassName }) {
    return (
        <svg width={width} height={width} viewBox="0 0 148 154" fill="none" xmlns="http://www.w3.org/2000/svg" className={classNames(className, "overflow-visible")} aria-hidden="true">
            <path d="M3.0426 53.1231L30.5444 16.3708L74.5281 2.62678L118.176 17.1547L144.812 54.383L144.279 100.091L116.777 136.843L72.7933 150.588L29.1451 136.062L2.50938 98.8342L3.0426 53.1231Z" stroke={colour} strokeWidth="5" className={pathClassName}/>
        </svg>

    );
}

Decagon.propTypes = {
    colour: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    className: PropTypes.string,
    pathClassName: PropTypes.string,
};