import React, { useEffect } from "react";

function moveCursorOuter(e) {
    const x = e.clientX;
    const y = e.clientY;

    window.requestAnimationFrame(() => {
        document.getElementById("cursorOuter").style.left = `${x - 12}px`;
        document.getElementById("cursorOuter").style.top = `${y - 12}px`;
    });
}

export default function Cursor() {

    useEffect(() => {
        window.addEventListener("mousemove", moveCursorOuter);

        return () => window.removeEventListener("mousemove", moveCursorOuter);
    }, []);
    
    return (
        <>
            <img id="cursorOuter" src="/cursorOuterDefault.svg" className="absolute" aria-hidden="true" style={{ transition: "left .1s, top .1s", position: "fixed", zIndex: "100", pointerEvents: "none" }} ></img>
        </>
    );
}



