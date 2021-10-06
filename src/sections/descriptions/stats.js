import React, { forwardRef } from "react";

const Stats = forwardRef((_, ref) => {
    return (
        <div ref={ref}>
            <p>We hosted 500+ students from 20+ schools across Canada. </p>
            <p>Helped over 200+ students connect and interview with 15+ companies in North America.</p>
            <p>Held 40 workshops with experts from distinguished organizations such as A, B, C, D. </p>
        </div>
    );
});

Stats.displayName = "Stats";

export default Stats;