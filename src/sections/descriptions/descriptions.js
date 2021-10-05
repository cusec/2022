import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { CarouselProvider, Slider, Slide, Dot, DotGroup } from "pure-react-carousel";
import { A } from "components/elements";
import Blurb from "./blurb";
import Stats from "./stats";
import ExplodingLogo from "svgs/explodingLogo";

import "pure-react-carousel/dist/react-carousel.es.css";

const Section = styled.section`
    ${tw`h-screen w-full flex flex-col justify-center items-center`}
    background-color: var(--dark);
    color: var(--light);

    .carousel {
        width: 80vw;
        height: 80vh;
    }
`;

const Dots = styled.div`
    ${tw`flex gap-8`}

    .carousel__dot--selected {
        color: var(--primary);
    }
`;

export default function Descriptions() {
    const [isLogoPlaying, setIsLogoPlaying] = useState(false);

    return (
        <Section id="about">
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={2}
                isIntrinsicHeight={true}
            >
                <div className="flex flex-col h-full justify-between gap-4">
                    <DotGroup renderDots={props =>
                        <Dots>
                            <Dot slide={0} onClick={() => setIsLogoPlaying(true)}>
                                <A lineColour="var(--light)">Stats from last year</A>
                            </Dot>
                            <Dot slide={1} onClick={() => setIsLogoPlaying(true)}>
                                <A lineColour="var(--light)">What is CUSEC?</A>
                            </Dot>
                        </Dots>
                    } />
                    
                    <Slider className="h-full flex items-center" classNameTray="h-full w-full" classNameTrayWrap="h-full">
                        <Slide index={0} onFocus={() => console.log("focus")}><Stats /></Slide>
                        <Slide index={1}><Blurb /></Slide>
                    </Slider>
                    <ExplodingLogo className="exploding-logo self-end" isLogoPlaying={isLogoPlaying} setIsLogoPlaying={setIsLogoPlaying} />
                </div>
            </CarouselProvider>
        </Section>
    );
}