import { useEffect, useState } from 'react';

function moveCursorOuter(e) {
    const x = e.clientX;
    const y = e.clientY;

    document.getElementById("cursorOuter").style.left = `${x - 12}px`;
    document.getElementById("cursorOuter").style.top = `${y - 12}px`;
}

export default function Cursor() {
    //const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        window.addEventListener("mousemove", moveCursorOuter);

        return () => window.removeEventListener("mousemove", moveCursorOuter);
    }, []);

    /*function moveCursorOuter2(e) {
        setPosition({x: e.clientX, y: e.clientY});
    }*/
    
    return (
        /*<img id="cursorOuter" src="/cursorOuterDefault.svg" className="absolute" style={{ left: `${position.x - 12}px`, top: `${position.y - 12}px`, transition: "left .1s, top .1s", position: "fixed", zIndex: "100" }} ></img>*/
        <img id="cursorOuter" src="/cursorOuterDefault.svg" className="absolute" style={{ transition: "left .1s, top .1s", position: "fixed", zIndex: "100", pointerEvents: "none" }} ></img>
    )
}



