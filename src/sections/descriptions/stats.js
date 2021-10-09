import React, { forwardRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const MainStat = styled.span`
    ${tw`text-xl text-primary`}
`;

const SecStat = styled.span`
    ${tw`text-lg text-primary`}
`;

const Stats = forwardRef((_, ref) => {
    return (
        <div ref={ref}>
            <p>We hosted <MainStat>800+ students</MainStat> from <SecStat>40+ schools</SecStat> across North America. </p>
            <p>Helped over students connect and interview with <MainStat>14+ companies</MainStat>.</p>
        </div>
    );
});

Stats.displayName = "Stats";

export default Stats;