import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import { A } from "components/elements";
import Blurb from "./blurb";
import Stats from "./stats";
import Testimonials from "./testimonials";
import WithSlideDecoration from "./WithSlideDecoration";

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
    return (
        <Section id="about">
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={3}
                isIntrinsicHeight={true}
            >
                <div className="flex flex-col h-full justify-between gap-4">
                    <Dots>
                        <Dot slide={0}><A>Stats from last year</A></Dot>
                        <Dot slide={1}><A>What is CUSEC?</A></Dot>
                        <Dot slide={2}><A>Testimonials</A></Dot>
                    </Dots>
                    <Slider className="h-full flex items-center" classNameTray="h-full w-full">
                        <Slide index={0}>{WithSlideDecoration(Stats)}</Slide>
                        <Slide index={1}>{WithSlideDecoration(Blurb)}</Slide>
                        <Slide index={2}>{WithSlideDecoration(Testimonials)}</Slide>
                    </Slider>
                </div>
            </CarouselProvider>
        </Section>
    );
}