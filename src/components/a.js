import styled, { css } from 'styled-components';
import tw from 'twin.macro';

const A = styled.a`
    ${tw`relative overflow-hidden`}

    ::after {
        ${tw`absolute bottom-1 right-0`}

        content: '';
        width: 1px;
        height: 1px;
        background-color: var(--dark);
        opacity: 0;

        transition: transform .5s, opacity 0.25s;
        transform-origin: right;
    }

    :hover {
        ::after {
            opacity: 1;
            transform: scaleX(100);
        }
    }
`;

export default A;