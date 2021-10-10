import styled from "styled-components";
import tw from "twin.macro";

const A = styled.a`
    ${tw`relative`}

    @media (hover: none) {
        text-decoration: ${props => props.disabled ? "none" : "underline"};
    }

    ::after {
        ${tw`absolute bottom-0 right-0 inline-block`}
        display: ${props => props.disabled ? "none" : "inline-block"};

        content: '';
        width: 100%;
        height: 1px;
        background-color: ${props => props.lineColour || "var(--dark)"};
        opacity: 0;

        transition: transform .5s, opacity 0s linear .5s;
        transform: scaleX(0);
        transform-origin: right;
    }

    :hover {
        cursor: url("/cursorInnerPointer.svg") 8 8, pointer;

        ::after {
            opacity: 1;
            transform: scaleX(1);
            transition: transform .5s, opacity 0s;
        }
    }

    :active {
        cursor: url("/cursorInnerClick.svg") 2 2, pointer;
    }
`;

export default A;