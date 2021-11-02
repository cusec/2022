

import React, { useEffect, useImperativeHandle, forwardRef, useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { throttle } from "lodash";
import { A } from "../components/elements";

const NavBase = styled.nav`
    ${tw`fixed w-full top-0 left-0 py-4 hidden md:block text-primary font-bold`}
    border-bottom: 1px solid var(--primary);
    z-index: var(--z-nav);
    backdrop-filter: blur(0.75rem);
`;

const NavInner = styled.div`
    ${tw`flex mx-auto`}
    width: 80%;

    img {
        ${tw`mr-auto`}
    }

    a :not(:first-child) {
        ${tw`ml-6`}
    }
`;

const NavLogo = forwardRef((_, ref) => {
    const el = useRef();
    useImperativeHandle(ref, () => ({
        rotate: (deg) => {
            el.current.style.transform = `rotate(${deg}deg)`;
        }
    }));

    return <img id="navLogo" src="/logoColourless.svg" alt="" ref={el} style={{ transition: "transform .5s" }} />;
});

NavLogo.displayName = "NavLogo";

const SECTIONS = [
    {
        id: "#about",
        display: "About"
    },
    /*{
        id: "#sponsors",
        display: "Sponsors"
    },*/
    {
        id: "#pricing",
        display: "Pricing"
    },
    {
        id: "#faq",
        display: "FAQ"
    }
];

export default function Nav() {
    const logoRef = useRef();
    useEffect(() => {
        const throttled = throttle(() => logoRef.current.rotate(window.scrollY), 200, { trailing: true });
        window.addEventListener("scroll", throttled);

        return () => window.removeEventListener("scroll", throttled);
    }, []);

    return (
        <NavBase>
            <NavInner>
                <NavLogo ref={logoRef} />
                {SECTIONS.map(section => (
                    <A href={section.id} key={section.id} lineColour="var(--primary)">{section.display}</A>
                ))}
            </NavInner>
        </NavBase>
    );
}