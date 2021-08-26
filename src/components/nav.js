import { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { throttle } from "lodash";
import { A } from "../components/elements";

const NavBase = styled.nav`
    ${tw`fixed w-full top-0 left-0 py-4`}
    z-index: var(--z-nav);
    border-bottom: 1px solid var(--dark);
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

let prevScrollPosition = 0;

const throttled =  throttle(rotateLogo, 500, { trailing: false });

function rotateLogo(e) {
    const scrollPosition = window.scrollY;
    const scrollDiff = scrollPosition - prevScrollPosition;
    const multiplier = scrollDiff === 0 ? 0 : Math.max(-Math.log(Math.abs(scrollDiff)) + 3, 1);
    document.getElementById("navLogo").style.transform = `rotate(${scrollDiff * multiplier}deg)`;
    prevScrollPosition = scrollPosition;
}

export default function Nav() {
    useEffect(() => {
        window.addEventListener("scroll", throttled);

        return () => window.removeEventListener("scroll", throttled);
    }, []);

    return (
        <NavBase>
            <NavInner>
                <img id="navLogo" src="/logoColourless.svg" style={{ transition: "transform .5s" }} />
                <A href="#about">About</A>
                {/*<A href="#sponsors">Sponsors</A>
                <A href="#pricing">Pricing</A>
                <A href="#faq">FAQ</A>*/}
            </NavInner>
        </NavBase>
    );
}