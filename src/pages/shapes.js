import React from "react";
import Nav from "components/nav";

export default function Shapes() {
    return (
        <>
            {/* https://2015.xoxofest.com/ */}
            <svg version="1.1" className="letterbox-letter letter-x1-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="160px" height="160px" viewBox="0 0 160 160" style={{ top: "294.161px", left: "91.1298px", display: "inline", position: "fixed" }} xmlSpace="preserve" fill="yellow">
                <rect x="-10.5" y="70" transform="matrix(0.7071 0.7071 -0.7071 0.7071 80 -33.1371)" className="st0" width="181.1" height="20"></rect>
            </svg>
            <Nav />
            <div className="fixed" style={{ color: "yellow" }}>header text</div>
            <div className="flex items-center content-center h-screen w-full p-12" style={{ backgroundColor: "#1800ff", mixBlendMode: "darken" }}>
                <p className="text-2xl font-bold text-light">Here is some really big text</p>
            </div>
            <div className="flex items-center content-center h-screen w-full p-12" style={{ backgroundColor: "white" }}>
                <p className="text-2xl font-bold" style={{ mixBlendMode: "luminosity" }}>Here is some more really big text</p>
            </div>
        </>
    );
}