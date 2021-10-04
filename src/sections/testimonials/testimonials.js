import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import { A } from "components/elements";
import TestimonialBlock from "./testimonialBlock";

const Section = styled.section`
    ${tw`h-screen w-full flex flex-col justify-center items-center`}
    background-color: var(--dark);
    color: var(--light);

    .carousel {
        width: 80vw;
        height: 80vh;
    } 
`;

const testimonialsText = [
    {
        quotation: "this is pretty cool",
        name: "me",
        title: "ultimate cool dude",
        photoUrl: "https://i.stack.imgur.com/qaX6q.jpg?s=64&g=1"
    }
];

const Dots = styled.div`
    ${tw`flex gap-8`}

    .carousel__dot--selected {
        color: var(--primary);
    }
`;

export default function Testimonials() {
    return (
        <Section>
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
                        {
                            testimonialsText.map(({ quotation, name, title, photoUrl }, i) => 
                                <Slide index={i} key={name}>
                                    <TestimonialBlock
                                        quotation={quotation}
                                        name={name}
                                        title={title}
                                        photoUrl={photoUrl}
                                    />
                                </Slide>)
                        }
                    </Slider>
                </div>
            </CarouselProvider>
        </Section>
    );
}