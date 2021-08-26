import { useRef, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import gsap from "gsap";

const Box = styled.div`
    ${tw`w-full flex-1 flex justify-center relative`}
    background-image: url("/testimg.jpg");
`;

const Text = styled.div`
    ${tw`flex gap-4 items-center relative`}
    width: 80vw;
`;

const Title = styled.h1`
    color: var(--light);
`;

const TopText = styled.h2`
    ${tw`absolute`}
    color: var(--primary);
    top: 50%;
`;

const BottomText = styled.p`
    ${tw`absolute opacity-0 my-8`}
    color: var(--light);
`;

const TopBackground = styled.div`
    ${tw`absolute top-0 left-0 w-full h-full`}
    background: var(--dark);
`;

export default function DetailBox({ title, topText, bottomText }) {
    const topTextRef = useRef();
    const bottomTextRef = useRef();
    const topBgRef = useRef();

    let textChange = null;

    useEffect(() => {
        textChange = gsap.timeline({
            paused: true,
            defaults: {
                duration: 0.25
            }
        })
            .to([topTextRef.current, topBgRef.current], { opacity: 0 })
            .to(bottomTextRef.current, { opacity: 1 });
    }, []);

    return (
        <Box
            onMouseEnter={() =>{ textChange && textChange.play(); }}
            onMouseLeave={() => { textChange && textChange.reverse(); }}
        >
            <TopBackground ref={topBgRef} />
            <Text>
                <Title>{title}</Title>
                <div className="flex-1 relative h-full">
                    <TopText ref={topTextRef}>{topText}</TopText>
                    <BottomText ref={bottomTextRef}>{bottomText}</BottomText>
                </div>
            </Text>
        </Box>
    );
}