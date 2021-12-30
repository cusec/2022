import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import tw from "twin.macro";

import { A } from "components/elements";
import ColourlessLogo from "../svgs/colourlessLogo";

import { CODE_OF_CONDUCT } from "constants/footerTexts";

import { FACEBOOK, INSTAGRAM, LINKEDIN, YOUTUBE } from "constants/socialMediaLinks";

const Container = styled.section`
    ${tw`grid items-center w-full gap-4`}

    color: var(--light);
    padding: 5rem 10vw;

    background-color: var(--dark);

    .name {
        grid-column: 1;
        grid-row: 1;
    }

    .social-media {
        grid-column: 2;
        grid-row: 1;

        & img {
            ${tw`w-6 h-6 mb-1`}
        }
    }

    .code-of-conduct {
        grid-column: 2;
        grid-row: 2;
    }
`;

const CODE_OF_CONDUCT_HREF = "#codeOfConduct";

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(CODE_OF_CONDUCT);

    useEffect(() =>{
        const isLinked = window.location.hash == CODE_OF_CONDUCT_HREF;
        setIsModalOpen(isLinked);
    }, []);

    Modal.setAppElement("#__next");

    const handleKeyPress = (e) => {
        if (e.key !== "Enter") return;

        setIsModalOpen(true);
    };

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                style={{ 
                    overlay: { zIndex: "var(--z-modal)" },
                    content: {
                        color: "var(--light)",
                        backgroundColor: "var(--dark)",
                        padding: "2rem"
                    }
                }}
            >
                {modalContent}
            </Modal>
            <Container>
                <span className="name flex items-center gap-2">
                    <ColourlessLogo /> CUSEC 2022
                </span>
                <span className="social-media flex gap-6 items-center justify-end">
                    <A href={FACEBOOK} lineColour="var(--light)" target="_blank" rel="noopener noreferrer">
                        <img src="/footer/facebook.svg" alt="Facebook" />
                    </A>
                    <A href={YOUTUBE} lineColour="var(--light)" target="_blank" rel="noopener noreferrer">
                        <img src="/footer/youtube.svg" alt="Youtube" />
                    </A>
                    <A href={INSTAGRAM} lineColour="var(--light)" target="_blank" rel="noopener noreferrer">
                        <img src="/footer/instagram.svg" alt="Instagram" />
                    </A>
                    <A href={LINKEDIN} lineColour="var(--light)" target="_blank" rel="noopener noreferrer">
                        <img src="/footer/linkedin.svg" alt="LinkedIn" />
                    </A>
                </span>
                <span className="code-of-conduct flex gap-4 items-center justify-end">
                    {/*<A lineColour="var(--light)">Open Source</A>
                <A lineColour="var(--light)">Attributions</A>*/}
                    <A
                        href={CODE_OF_CONDUCT_HREF}
                        lineColour="var(--light)"
                        onClick={() => setIsModalOpen(true)}
                        onKeyDown={handleKeyPress}
                        tabIndex="0"
                    >
                        Code of Conduct
                    </A>
                </span>
            </Container>
        </>
    );
}