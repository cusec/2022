import React from "react";
import DetailBox from "./detailBox";
import styled from "styled-components";
import tw from "twin.macro";

const BOX_TEXT = [
    {
        title: "Connect",
        topText: "with like-minded students.",
        bottomText: "with 500+ students from across Canada",
        backgroundUrl: "/detailBoxes/connect.webp"
    },
    {
        title: "Learn",
        topText: "from world-renowned experts.",
        bottomText: "from etc etc",
        backgroundUrl: "/detailBoxes/learn.webp"
    },
    {
        title: "Discover",
        topText: "career opportunities",
        bottomText: "test text",
        backgroundUrl: "/detailBoxes/discover.webp"
    }
];

const Section = styled.section`
    ${tw`h-screen w-full flex flex-col justify-center`}
    @media (min-width: 768px) {
        padding-top: 10vh;
    }
    background: var(--dark);
`;

/*
1. Compress + remove audio + scale down: ffmpeg -ss 6 -t 3 -i learn.mp4 -vcodec h264 -an -vf "scale=320:-1:flags=lanczos" learn2.mp4
2. Convert to webp: ffmpeg -i learn2.mp4 -vcodec libwebp -filter:v  fps=fps=20 -lossless 0 -compression_level 6 -loop 0 learn.webp
*/

export default function DetailBoxes() {
    return (
        <Section>
            {BOX_TEXT.map(section => <DetailBox key={section.title} { ...section } />)}
        </Section>
    );
}