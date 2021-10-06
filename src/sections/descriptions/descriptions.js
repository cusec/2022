import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { CarouselProvider, Slider, Slide, Dot, DotGroup } from "pure-react-carousel";
import { A } from "components/elements";
import Blurb from "./blurb";
import Stats from "./stats";
import ExplodingLogo from "svgs/explodingLogo";

import "pure-react-carousel/dist/react-carousel.es.css";

const Section = styled.section`
    ${tw`min-h-screen md:h-screen w-full flex flex-col justify-center items-center`}
    background-color: var(--dark);
    color: var(--light);
    padding-top: 10vh;

    .carousel {
        width: 80vw;
        min-height: 80vh;
    }
`;

const Dots = styled.div`
    ${tw`flex gap-8`}

    .carousel__dot--selected {
        color: var(--primary);
        text-shadow: 0px 0px 12px rgba(249, 222, 44, 0.5);
    }
`;

export default function Descriptions() {
    const [isLogoPlaying, setIsLogoPlaying] = useState(false);
    const rootRef = useRef();
    const statsRef = useRef();
    const blurbRef = useRef();

    useEffect(() => {
        const obsOptions = {
            root: rootRef.current,
            rootMargin: "0px",
            threshold: 0.5
        };
        const observer = new IntersectionObserver(() => !isLogoPlaying && setIsLogoPlaying(true), obsOptions);
        observer.observe(statsRef.current);
        observer.observe(blurbRef.current);
    }, []);


    return (
        <Section id="about" ref={rootRef}>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={2}
                isIntrinsicHeight={true}
            >
                <div className="flex flex-col h-full justify-between gap-4">
                    <DotGroup renderDots={props =>
                        <Dots>
                            <Dot slide={0}>
                                <A lineColour="var(--light)">Stats from last year</A>
                            </Dot>
                            <Dot slide={1}>
                                <A lineColour="var(--light)">What is CUSEC?</A>
                            </Dot>
                        </Dots>
                    } />
                    
                    <Slider className="h-full flex items-center" classNameTray="h-full w-full" classNameTrayWrap="h-full">
                        <Slide index={0}><Stats ref={statsRef} /></Slide>
                        <Slide index={1}><Blurb ref={blurbRef} /></Slide>
                    </Slider>
                    <ExplodingLogo className="exploding-logo self-end" isLogoPlaying={isLogoPlaying} setIsLogoPlaying={setIsLogoPlaying} />
                </div>
            </CarouselProvider>
        </Section>
    );
}