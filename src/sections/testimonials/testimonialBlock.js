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
            <Decagon colour="var(--secondary-highlight)" className="absolute h-32 w-32 top-4 right-4" />
            <img src={photo} alt={name} className="relative h-32 w-32 rounded-full"/>
        </div>
    );
};

Photo.propTypes = {
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    className: PropTypes.string
};

const Block = styled.div`
    ${tw`w-full sm:w-9/12`}

    display: grid;
    grid-template-columns: 1fr;

    .photo {
        ${tw`mb-8 justify-self-center`}

        grid-column: 1;
        grid-row: 1;
    }

    .quotation {
        ${tw`flex items-end`}
        grid-row: 2
    }

    .person {
        grid-column: 1;
        grid-row: 3;

        color: var(--secondary-highlight);
    }

    @media (min-width: 768px) {
        grid-template-columns: 1fr min-content;
        column-gap: 1rem;

        .quotation {
            grid-column: 1;
            grid-row: 1;
        }

        .person {
            grid-column: 1;
            grid-row: 2;
        }

        .photo {
            grid-column: 2;
            grid-row: 1 / 2;
        }
    }
    
`;

export default function TestimonialBlock({ quotation, name, title, photoUrl }) {
    return (
        <Block>
            <div className="quotation">{quotation}</div>
            <div className="person">- {name}, {title}</div>
            <Photo className="photo" name={name} photoUrl={photoUrl} />
        </Block>
    );
}

TestimonialBlock.propTypes = {
    quotation: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photoUrl: PropTypes.string
};