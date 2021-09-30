import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";

import ExplodingLogo from "svgs/explodingLogo";

const Div = styled.div`
    ${tw`flex flex-col h-full`}

    .slide-content {
        ${tw`flex-1`}
    }

    .exploding-logo {
        ${tw`self-end`}
    }
`;

export default function WithSlideDecoration(Slide) {
    return (
        <Div>
            <div className="slide-content">
                <Slide />
            </div>
            <ExplodingLogo className="exploding-logo" />
        </Div>
    );
}

WithSlideDecoration.propTypes = {
    Slide: PropTypes.element.isRequired
};