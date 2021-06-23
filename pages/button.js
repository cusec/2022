import styled, { css } from 'styled-components';

const PRIMARY = "var(--primary)";
const SECONDARY = "var(--dark)";
const DISABLED = "var(--disabled)";

const COLOUR_SCHEME = {
    primary: {
        primary: PRIMARY,
        secondary: SECONDARY
    },
    secondary: {
        primary: SECONDARY,
        secondary: PRIMARY
    }
}

const baseButton = css`
    border-radius: 400px;
    padding: 8px 12px;
    font-weight: bold;
`;

const normalButton = css`
    ${baseButton}
    padding-right: 36px;

    position: relative;
    background-color: ${props => COLOUR_SCHEME[props.colourScheme || "primary"].primary};
    border: 1px solid ${SECONDARY};
    color: ${props => COLOUR_SCHEME[props.colourScheme || "primary"].secondary};

    z-index: 2;
    overflow: hidden;

    transition: color .5s; 

    ::before {
        content: '';
        display: inline-block;
        position: absolute;
        width: 16px;
        height: 16px;
        top: 10.5px;
        right: 12px;
        border-radius: 100%;
        background-color: ${props => COLOUR_SCHEME[props.colourScheme || "primary"].secondary};
        
        z-index: -1;

        transition: transform .5s;
    }

    :hover {
        color: ${props => COLOUR_SCHEME[props.colourScheme || "primary"].primary};
        cursor: pointer;

        ::before {
            transform: scale(100);
        }
    }
`;

const disabledButton = css`
    ${baseButton}

    border: none;
    background-color: var(--disabled);
    color: var(--light);

    cursor: not-allowed;
`;

const Button = styled.button`
    ${props => (props.disabled ? disabledButton : normalButton)}
`;

export default Button;