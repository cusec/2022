import React from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";
import styled from "styled-components";

import Page from "./page";

import { TEAM_MEMBERS } from "constants/teamInfo";

const Section = styled.section`
    ${tw`min-h-screen w-full bg-secondary flex flex-col md:flex-row gap-4`}
    padding: 10vh 10vw;
`;

const BUBBLE_SIZE = {
    w: "w-32 md:w-36",
    h: "h-32 md:h-36"
};

const Bubble = ({ role, name, img }) => {
    return (
        <div className={`inline-flex flex-col items-center gap-2 ${BUBBLE_SIZE["w"]} m-4`} >
            <div className={`rounded-full ${BUBBLE_SIZE["w"]} ${BUBBLE_SIZE["h"]} bg-light shadow overflow-hidden`}>
                <img src={`/team/${img}`} alt={name} />
            </div>
            <p className="text-sm text-center">
                <span className="font-bold">{name}</span>
                <br />
                {role}
            </p>
        </div>
    );
};

Bubble.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
};

export default function Team() {
    return (
        <Page>
            <Section>
                <div className="inline-block md:sticky md:max-h-0 top-48 md:mb-32">
                    <h2 className="text-xl font-bold">Team Members</h2>
                    <p>Meet the people who made CUSEC 2022 possible.</p>
                </div>
                <div className="text-center">
                    {
                        TEAM_MEMBERS.map(({ name, role, img }) => (
                            <Bubble key={name} name={name} role={role} img={img} />
                        ))
                    }
                </div>
            </Section>
        </Page>
    );
}