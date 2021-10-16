import React, { forwardRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const MainStat = styled.span`
    ${tw`text-lg md:text-xl text-primary`}
`;

const SecStat = styled.span`
    ${tw`md:text-lg text-primary`}
`;

const Div = styled.div`
    padding: 0 10%;
`;

const Stats = forwardRef((_, ref) => {
    return (
        <Div ref={ref}>
            <p>We hosted <MainStat>600+ students</MainStat> from <SecStat>40+ schools</SecStat> across North America. </p>
            <p>Helped over students connect and interview with <MainStat>14+ companies</MainStat>.</p>
        </Div>
    );
});

Stats.displayName = "Stats";

export default Stats;