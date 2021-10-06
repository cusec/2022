import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import TestimonialBlock from "./testimonialBlock";
import Decagon from "svgs/decagon";

import { testimonialsText } from "constants/testimonialText";

const Carousel = styled.div`
    ${tw`min-h-screen w-full relative py-4 flex flex-col justify-center items-center`}
    background-color: rgba(30, 30, 30, 0.9);
    color: var(--light);
    backdrop-filter: blur(0.25rem) grayscale(100%);

    .carousel {
        width: 80vw;
        min-height: 80vh;
    } 
`;

const Img = styled.img`
    ${tw`absolute`}
    height: 115vh;
    bottom: -30vh;

    right: -10vw;
    @media (min-width: 640px) {
        right: -5vw;
    }
`;

const Dots = styled.div`
    ${tw`flex gap-8 justify-center`}

    .testimonialDot {
        stroke-width: 15;

        &:hover {
            fill: var(--dark);
        }
    }

    .carousel__dot--selected * {
        fill: var(--secondary);
    }

`;

export default function Testimonials() {
    return (
        <section className="w-full relative overflow-hidden">
            <Img src="/logo.svg" alt="" aria-hidden="true" />
            <Carousel>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={testimonialsText.length}
                    isIntrinsicHeight={true}
                    isPlaying={true}
                    className="flex flex-col justify-between lg:gap-4"
                >
                    <h2 className="text-xl mx-8">Hear from our past attendees</h2>
                    <Slider className="flex items-center" classNameTray="w-full" classNameTrayWrap="w-full">
                        {
                            testimonialsText.map(({ quotation, name, title, photoUrl }, i) => 
                                <Slide index={i} key={name} innerClassName="flex justify-center items-center h-auto">
                                    <TestimonialBlock
                                        quotation={quotation}
                                        name={name}
                                        title={title}
                                        photoUrl={photoUrl}
                                    />
                                </Slide>)
                        }
                    </Slider>
                    <Dots>
                        {
                            Array.from(
                                { length: testimonialsText.length }, 
                                (_, i) => <Dot slide={i} key={i}><Decagon colour="white" width="16" pathClassName="testimonialDot" /></Dot>)
                        }
                    </Dots>
                </CarouselProvider>
            </Carousel>
        </section>
    );
}