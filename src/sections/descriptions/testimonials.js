import React from "react";
import TestimonialBlock from "./testimonialBlock";

const testimonialsText = [
    {
        quotation: "this is pretty cool",
        name: "me",
        title: "ultimate cool dude"
    }
];

export default function Testimonials() {
    return (
        <>
            {
                testimonialsText.map(({ quotation, name, title }) => 
                    <TestimonialBlock key={name} quotation={quotation} name={name} title={title} />)
            }
        </>
    );
}