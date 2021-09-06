import React, { useEffect } from "react";
import { throttle } from "lodash";

const scrollScreen = isScrolledDown => {
    const scrollMod = isScrolledDown ? 1 : -1;
    window.scrollTo(0, window.scrollY + window.innerHeight * scrollMod);
};

const scrollScreenWheel = throttle(e => {
    if (e.deltaY === 0) return;
    e.preventDefault();
    scrollScreen(e.deltaY > 0);
}, 200, { trailing: true });

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
        window.addEventListener("wheel", scrollScreenWheel);
        window.addEventListener("touchstart", screenSwipeStart, { passive: true });
        window.addEventListener("touchmove", screenSwipeMove, { passive: true });

        return () => {
            window.removeEventListener("wheel", scrollScreenWheel);
            window.removeEventListener("touchstart", screenSwipeStart);
            window.removeEventListener("touchmove", screenSwipeMove);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 h-screen w-screen">
            <div
                className="absolute top-0 left-0 h-1/4 w-screen bg-red-400"
                onClick={() => scrollScreen(false)}
            ></div>
            <div
                className="absolute bottom-0 left-0 h-1/4 w-screen bg-red-400"
                onClick={() => scrollScreen(true)}
            ></div>
        </div>
    );
}