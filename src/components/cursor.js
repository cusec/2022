import { useEffect, useState } from 'react';

function moveCursorOuter(e) {
    const x = e.clientX;
    const y = e.clientY;

    document.getElementById("cursorOuter").style.left = `${x}px`;
    document.getElementById("cursorOuter").style.top = `${y}px`;
}

export default function Cursor() {
    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        window.addEventListener("mousemove", moveCursorOuter2);

        return () => window.removeEventListener("mousemove", moveCursorOuter2);
    }, []);

    function moveCursorOuter2(e) {
        setPosition({x: e.clientX, y: e.clientY});
    }
    
    return (
        <img id="cursorOuter" src="/cursorOuterDefault.svg" className="absolute" style={{ left: `${position.x - 12}px`, top: `${position.y - 12}px`, transition: "left .1s, top .1s", position: "fixed" }} ></img>
    )
}



