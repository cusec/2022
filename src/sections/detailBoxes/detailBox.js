import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";
import gsap from "gsap";

const Box = styled.div`
    ${tw`w-full flex-1 flex justify-center relative`}
    background-image: url("${props => props.backgroundUrl}");
    background-size: cover;
    background-position: center;
`;

const Text = styled.div`
    ${tw`flex flex-col md:flex-row md:gap-4 md:items-center relative`}
    width: 80vw;
`;

const Title = styled.h1`
    ${tw`text-xl lg:text-2xl font-bold my-4 md:m-0`}
    color: var(--light);
`;

const TopText = styled.h2`
    ${tw`absolute text-lg md:text-xl md:top-2/4`}
    color: var(--primary);

    @media (min-width: 768px) {
        transform: translateY(-50%);
    }

    @media (min-width: 1024px) {
        transform: translateY(0);
    }
`;

const BottomText = styled.p`
    ${tw`absolute opacity-0 md:py-8 h-full flex items-center`}
    color: var(--light);
`;

const TopBackground = styled.div`
    ${tw`absolute top-0 left-0 w-full h-full`}
    background: var(--dark);
`;

export default function DetailBox({ title, topText, bottomText, backgroundUrl }) {
    const topTextRef = useRef();
    const bottomTextRef = useRef();
    const topBgRef = useRef();

    let textChange = null;

    useEffect(() => {
        textChange = gsap.timeline({
            paused: true,
            reversed: true,
            defaults: {
                duration: 0.25
            }
        })
            .to([topTextRef.current], { opacity: 0 })
            .to([topBgRef.current], { opacity: 0.75 }, "-=0.25")
            .to(bottomTextRef.current, { opacity: 1 });
        console.log(textChange.reversed());
    }, []);

    return (
        <Box
            backgroundUrl={backgroundUrl}
            onMouseEnter={() =>{ textChange && textChange.play(); }}
            onMouseLeave={() => { textChange && textChange.reverse(); }}
            onTouchEnd={() =>{ textChange && textChange.reversed() ? textChange.play() : textChange.reverse(); }}
        >
            <TopBackground ref={topBgRef} />
            <Text>
                <Title>{title}</Title>
                <div className="flex-1 relative h-full w-full">
                    <TopText ref={topTextRef}>{topText}</TopText>
                    <BottomText ref={bottomTextRef}>{bottomText}</BottomText>
                </div>
            </Text>
        </Box>
    );
}

DetailBox.propTypes = {
    title: PropTypes.string.isRequired,
    topText: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired,
    backgroundUrl: PropTypes.string.isRequired
};