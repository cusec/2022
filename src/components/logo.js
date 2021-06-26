import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

const enlarge = keyframes`
    0% {
        transform: scale(0) translate(-50%, -50%);
    }

    100% {
        transform: scale(100%) translate(-50%, -50%);
    }
`;

const Background = styled.div`
    ${tw`absolute`}
    height: 200vw;
    width: 200vw;
    border-radius: 100vw;
    background: radial-gradient(circle at center, #F9DE2C 0%, #E8A248 100%);
    top: 50%
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: top left;
    z-index: -50;
    animation: .5s ${enlarge};
`;

export default function Logo() {
    return (
        <>
            <img src="/logo.svg" style={{height: "100%"}}/>
            <div className="h-full w-full overflow-hidden absolute top-0 left-0 -z-10">
                <Background></Background>
            </div>
        </>
    )
}