import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";
import classNames from "classnames";

import Decagon from "svgs/decagon";

const Photo = ({ name, photoUrl, className }) => {
    const photo = photoUrl || "/logo.svg";

    return (
        <div className={classNames("relative inline-block h-32 w-32", className)}>
            <Decagon colour="var(--primary)" className="absolute h-32 w-32 top-4 right-4" />
            <img src={photo} alt={name} className="relative"/>
        </div>
    );
};

Photo.propTypes = {
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    className: PropTypes.string
};

const Block = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    column-gap: 1rem;

    .quotation {
        ${tw`flex items-end`}
        grid-column: 1;
        grid-row: 1;
    }

    .person {
        grid-column: 1;
        grid-row: 2;

        color: var(--secondary-highlight);
    }

    .photo {
        grid-column: 2;
        grid-row: 1 / 2;
    }
`;

export default function TestimonialBlock({ quotation, name, title, photoUrl }) {
    return (
        <Block>
            <div className="quotation">{quotation}</div>
            <div className="person">- {name}, {title}</div>
            <Photo className="photo" photoUrl={photoUrl} />
        </Block>
    );
}

TestimonialBlock.propTypes = {
    quotation: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photoUrl: PropTypes.string
};