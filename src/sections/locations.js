import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import classNames from "classnames";
import { A } from "components/elements";

import Canada from "svgs/canada";

import { CITIES } from "constants/cities";
import { EMAIL } from "constants/socialMediaLinks";

// Todo: move z-index to globals.css
const Section = styled.section`
    ${tw`min-h-screen w-full flex flex-col justify-center relative overflow-hidden z-0`}
    background-color: var(--secondary-highlight);

    .map {
        ${tw`absolute`}
        transform: rotate(-15deg);
        bottom: -15vh;
        z-index: -10;
        height: 90vh;

        right: -50vw;
        @media (min-width: 768px) {
            right: 0vw;
        }
    }
`;

const Subsection = styled.div`
    margin: 10vh 10vw;
    z-index: 0;

    .hds {
        transition: height 0.25s ease, opacity 0.25s;

        .hd-inner {
            ${tw`static left-0`}
        }

        &:not(.is-open) {
            .hd-inner {
                ${tw`absolute`}
                left: -100vw;
                transition: left 0s linear 0.25s;
            }
        }
    }
`;

export default function Locations() {
    const [hovered, setHovered] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Section>
            <Canada className="map opacity-40 md:opacity-100" hovered={hovered} />
            <Subsection>
                <h2 className="text-xl md:text-2xl font-bold custom-shadow">This year, join us virtually.</h2>

                <p className="text-lg">Get in touch with your university's Head Delegate!</p>
                <br />

                <div>
                    {
                        Object.entries(CITIES).map(
                            ([cityKey, { name: city, province }], i) =>
                                <React.Fragment key={cityKey}>
                                    {i > 0 && <span className="m-3">|</span>}
                                    <A
                                        className={classNames(
                                            "city-name",
                                            isOpen && selectedCity === cityKey && "font-bold"
                                        )}
                                        onMouseOver={() => setHovered(province)}
                                        onMouseLeave={() => setHovered(null)}
                                        onClick={() => {
                                            setIsOpen(!isOpen || selectedCity !== cityKey);
                                            setSelectedCity(cityKey);
                                        }}
                                    >
                                        {city}
                                    </A>
                                </React.Fragment>
                        )
                    }
                </div>
                <br />
                <>
                    {
                        Object.entries(CITIES).map(
                            ([cityKey, { hds }]) =>
                                <div 
                                    key={cityKey} 
                                    className={classNames(
                                        "relative hds",
                                        isOpen && selectedCity === cityKey ? "h-28 opacity-100" : "h-0 opacity-0",
                                        isOpen && selectedCity === cityKey && "is-open"
                                    )}
                                >
                                    <div className="flex gap-16 hd-inner">
                                        {hds.map(({ name, uni, email, img }) => 
                                            <div className="flex gap-2" key={name}>
                                                <img
                                                    src={`/headDelegates/${img}`}
                                                    alt={name}
                                                    className={"h-28 w-28 rounded-full shadow hd-img"} />
                                                <div className={"flex flex-col justify-center hd-text h-28"}>
                                                    <span className="text-lg">{name}</span>
                                                    <br />
                                                    <span>{uni}</span>
                                                    <br/>
                                                    <A href={`mailto:${email}`} className="font-bold">{email}</A>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                        )
                    }
                </>
                
                <br />
                <p>Don't see your university? Reach out to <A href={`mailto:${EMAIL}`} className="font-bold">info@cusec.net</A>, and we'd be happy to answer your questions!</p>
            </Subsection>
        </Section>
    );
}