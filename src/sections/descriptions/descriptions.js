import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import { A } from "components/elements";
import Blurb from "./blurb";

import "pure-react-carousel/dist/react-carousel.es.css";

const Section = styled.section`
    ${tw`h-screen flex flex-col justify-center`}
    width: 80vw;

    .carousel carousel__slide {
        height: 100vh;
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
                <Slider>
                    <Slide index={0}><Blurb />1</Slide>
                    <Slide index={1}><Blurb />2</Slide>
                    <Slide index={2}><Blurb />3</Slide>
                </Slider>
                <Dot slide={0}><A>Stats from last year</A></Dot>
                <Dot slide={1}><A>What is CUSEC?</A></Dot>
                <Dot slide={2}><A>Testimonials</A></Dot>
            </CarouselProvider>
        </Section>
    );
}