import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";

const Box = styled.div`
    ${tw`p-8 flex-1`}
    border: 1px solid white;
    
    li {
        list-style: "> ";
    }

    &.vip {
        border-color: var(--secondary-highlight);
        box-shadow: 0 0 2rem 0 rgba(249, 222, 44, 0.5);
    }
`;

export default function TicketBox ({ content, className }) {
    const { title, price, perks } = content;

    return (
        <Box className={className}>
            <p className="flex gap-2 justify-center">
                {title}
                <span className="text-primary">{price}</span>
            </p>
            <ul>
                {perks.map(perk => (
                    <li key={perk}>{perk}</li>
                ))}
            </ul>
        </Box>
    );
}

TicketBox.propTypes = {
    content: PropTypes.exact({
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        perks: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
    className: PropTypes.string
};