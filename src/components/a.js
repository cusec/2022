import styled, { css } from "styled-components";
import tw from "twin.macro";

const A = styled.a`
    ${tw`relative overflow-hidden`}

    ::after {
        ${tw`absolute bottom-1 right-0`}

        content: '';
        width: 1px;
        height: 1px;
        background-color: var(--dark);
        opacity: 0;

        transition: transform .5s, opacity 0s linear .5s;
        transform-origin: right;
    }

    :hover {
        cursor: url("/cursorInnerPointer.svg") 8 8, pointer;

        ::after {
            opacity: 1;
            transform: scaleX(100);
            transition: transform .5s, opacity 0s;
        }
    }

    :active {
        cursor: url("/cursorInnerClick.svg") 2 2, pointer;
    }
`;

export default A;