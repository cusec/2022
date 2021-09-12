import React, { useEffect } from "react";
import { throttle } from "lodash";

let currScreen = 0;
const minScreen = 0;
const maxScreen = 4; // todo: unhardcode?

const scrollScreen = throttle(isScrolledDown => {
    const scrollMod = isScrolledDown ? 1 : -1;

    console.log(currScreen + scrollMod);
    if (currScreen + scrollMod < minScreen || currScreen + scrollMod > maxScreen) return;

    console.log((currScreen + scrollMod) * window.innerHeight);
    window.scrollTo(0, (currScreen + scrollMod) * window.innerHeight);
    currScreen += scrollMod;
}, 1500, { leading: true, trailing: false });

const scrollScreenWheel = e => {
    e.preventDefault();
    if (e.deltaY === 0) return;
    scrollScreen(e.deltaY > 0);
};

let scrollY;

const screenSwipeStart = throttle(e => {
    scrollY = e.touches[0].clientY;
}, 200);

const screenSwipeMove = throttle(e => {
    if (!scrollY) return;

    const currY = e.touches[0].clientY;
    if (currY - scrollY === 0) return;
    scrollScreen(currY > scrollY);
    scrollY = null;

    e.preventDefault();
}, 200);


export default function Scroll() {
    useEffect(() => {
        window.addEventListener("wheel", scrollScreenWheel, { passive: false });
        window.addEventListener("touchstart", screenSwipeStart);
        window.addEventListener("touchmove", screenSwipeMove);

        return () => {
            window.removeEventListener("wheel", scrollScreenWheel);
            window.removeEventListener("touchstart", screenSwipeStart);
            window.removeEventListener("touchmove", screenSwipeMove);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 h-screen w-screen">
            {/*<div
                className="absolute top-0 left-0 h-1/4 w-screen bg-red-400"
                onClick={() => scrollScreen(false)}
            ></div>
            <div
                className="absolute bottom-0 left-0 h-1/4 w-screen bg-red-400"
                onClick={() => scrollScreen(true)}
            ></div>*/}
        </div>
    );
}