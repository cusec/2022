import React from "react";
import DetailBox from "./detailBox";

const BOX_TEXT = [
    {
        title: "Connect",
        topText: "with like-minded students.",
        bottomText: "with 500+ students from across Canada",
        backgroundUrl: "/connect_processed.gif"
    },
    {
        title: "Learn",
        topText: "from world-renowned experts.",
        bottomText: "from etc etc",
        backgroundUrl: "https://upload.wikimedia.org/wikipedia/commons/a/aa/SmallFullColourGIF.gif"
    },
    {
        title: "Discover",
        topText: "career opportunities",
        bottomText: "test text",
        backgroundUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Newtons_cradle_animation_book_2.gif"
    }
];

export default function DetailBoxes() {
    return (
        <section className="h-screen w-full flex flex-col justify-center">
            {BOX_TEXT.map(section => <DetailBox key={section.title} { ...section } />)}
        </section>
    );
}