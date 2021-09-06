import React, { useEffect } from "react";
import { throttle } from "lodash";

const scrollScreen = isScrolledDown => {
    const scrollMod = isScrolledDown ? 1 : -1;
    window.scrollBy(0, window.innerHeight * scrollMod);
    scrollY = window.scrollY;
};

const scrollScreenWheel = throttle(e => {
    if (e.deltaY === 0) return;
    scrollScreen(e.deltaY > 0);
}, 200, { trailing: false });

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
        scrollY = window.scrollY;

        window.addEventListener("wheel", scrollScreenWheel, { passive: true });
        window.addEventListener("touchstart", screenSwipeStart, { passive: true });
        window.addEventListener("touchmove", screenSwipeMove, { passive: true });

        return () => {
            window.removeEventListener("scroll", scrollScreenWheel, 200, { trailing: false });
            window.removeEventListener("touchstart", screenSwipeStart);
            window.removeEventListener("touchmove", screenSwipeMove);
        };
    }, []);

    return null;
}