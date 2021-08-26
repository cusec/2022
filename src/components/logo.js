import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import tw from "twin.macro";

const enlarge = keyframes`
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(100%);
    }
`;

const Background = styled.div`
    ${tw`relative`}
    height: max(250vw, 250vh);
    width: max(250vw, 250vh);
    border-radius: 125vw;
    background: radial-gradient(circle at center, #F9DE2C 0%, #E8A248 100%);
    transform-origin: center;
    z-index: -50;
    animation: .5s ${enlarge};
`;

export default function Logo() {
    const logo = useRef(null);
    const gradient = useRef(null);

    useEffect(() => {
        const { offsetTop, offsetLeft, offsetHeight: logoHeight, offsetWidth: logoWidth } = logo.current;
        const { offsetHeight, offsetWidth } = gradient.current;
        gradient.current.style.left = `${offsetLeft - (offsetWidth / 2) + (logoWidth / 2)}px`;
        gradient.current.style.top = `${offsetTop - (offsetHeight / 2) + (logoHeight / 2)}px`;
    }, []);

    return (
        <>
            <img ref={logo} src="/logo.svg" className="h-full"/>
            <div className="w-full overflow-hidden absolute top-0 left-0" style={{ height: "200vh", zIndex: "var(--z-bubble-bg)"}}>
                <Background ref={gradient}></Background>
            </div>
        </>
    );
}