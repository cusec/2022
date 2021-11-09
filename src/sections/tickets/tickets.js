import React from "react";
import TicketBox from "./ticketBox";
import styled from "styled-components";
import tw from "twin.macro";

import { TICKET_INFO } from "constants/ticketInfo";

const Container = styled.section`
    ${tw`min-h-screen w-full flex flex-col justify-center items-center gap-12`}
    color: var(--light);
    padding: 5rem 10vw;

    background-color: var(--dark);
`;

export default function Tickets() {
    return (
        <Container id="pricing">
            <h2 className="text-xl md:text-2xl md:font-bold">Attend CUSEC 2022!</h2>
            <div className="flex flex-col md:flex-row gap-12 h-min">
                <TicketBox content={TICKET_INFO.basic} />
                <TicketBox content={TICKET_INFO.vip} className="vip" />
            </div>
        </Container>
    );
}