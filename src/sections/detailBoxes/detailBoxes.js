import DetailBox from "./detailBox";
import styled from "styled-components";

const BOX_TEXT = [
    {
        title: "Connect",
        topText: "with like-minded students.",
        bottomText: "with 500+ students from across Canada"
    },
    {
        title: "Learn",
        topText: "from world-renowned experts.",
        bottomText: "from etc etc"
    },
    {
        title: "Discover",
        topText: "career opportunities",
        bottomText: "test text"
    }
];

export default function DetailBoxes() {
    return (
        <section className="h-screen w-full flex flex-col justify-center">
            {BOX_TEXT.map(section => <DetailBox { ...section } />)}
        </section>
    );
}