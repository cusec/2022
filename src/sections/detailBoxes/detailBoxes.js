import DetailBox from "./detailBox";
import styled from "styled-components";

const BOX_TEXT = [
    {
        title: "Connect",
        topText: "with like-minded students.",
        bottomText: "with 500+ students from across Canada",
        backgroundUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rotating_earth_%28large%29.gif/300px-Rotating_earth_%28large%29.gif"
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
            {BOX_TEXT.map(section => <DetailBox { ...section } />)}
        </section>
    );
}