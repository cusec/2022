import styled, { css } from "styled-components";
import tw from "twin.macro";

const PRIMARY = "var(--primary)";
const SECONDARY = "var(--dark)";

const COLOUR_SCHEME = {
    primary: {
        primary: PRIMARY,
        secondary: SECONDARY
    },
    secondary: {
        primary: SECONDARY,
        secondary: PRIMARY
    }
};

const baseButton = css`
    ${tw`py-2 px-3 font-bold rounded-full`}
`;

const normalButton = css`
    ${baseButton}
    padding-right: 36px;

    ${tw`relative z-10 overflow-hidden`}
    background-color: ${props => COLOUR_SCHEME[props.colourScheme || "primary"].primary};
    border: 1px solid ${SECONDARY};
    color: ${props => COLOUR_SCHEME[props.colourScheme || "primary"].secondary};

    transition: color .5s; 

    ::before {
        content: '';
        ${tw`inline-block absolute w-4 h-4 rounded-full`}
        transform: translate(0, -50%);
        top: 50%;
        right: 12px;
        background-color: ${props => COLOUR_SCHEME[props.colourScheme || "primary"].secondary};
        
        z-index: -10;

        transition: transform .5s;
        transform-origin: top;
    }

    ::after {
        content: '';
        ${tw`inline-block absolute w-4 h-4 rounded-full`}
        transform: scale(0.01) translate(0, -50%);
        top: 50%;
        right: 12px;
        opacity: 0;
        background-color: ${props => COLOUR_SCHEME[props.colourScheme || "primary"].primary};
        
        transition: transform .1s;
        transform-origin: top;
    }

    :hover {
        ${tw`cursor-pointer`}

        color: ${props => COLOUR_SCHEME[props.colourScheme || "primary"].primary};
        cursor: url("/cursorInnerPointer.svg") 8 8, pointer;

        ::before {
            transform: scale(100) translate(0, -50%);
        }
    }

    :active {
        /*${tw`opacity-75`}*/
        cursor: url("/cursorInnerClick.svg") 2 2, pointer;

        ::after {
            opacity: 1;
            transform: scale(1) translate(0, -50%);
        }
    }
`;

const disabledButton = css`
    ${baseButton}

    ${tw`border-none cursor-not-allowed`}

    background-color: var(--disabled);
    color: var(--light);
`;

const Button = styled.button`
    ${props => (props.disabled ? disabledButton : normalButton)}
`;

export default Button;