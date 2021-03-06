import React, { forwardRef } from "react";
import styled from "styled-components";

const Div = styled.div`
    padding: 0 10%;
`;

const Blurb = forwardRef((_, ref) => {
    return (
        <Div ref={ref}>
            <div className="mb-8">
                <h2 className="text-xl text-secondary-highlight">Canada’s annual software engineering conference</h2>
                <p>
                    Join thousands of students from across Canada for a weekend full of interactive knowledge sharing, mentoring, career opportunities and more as we explore the endless possibilities of the future of tech.
                </p>
            </div>
                    
            <div className="mt-8">
                <h2 className="text-xl text-secondary-highlight">Why join?</h2>
                <p>
                    CUSEC is an annual software engineering conference organized for students by students. It was founded in 2002 by a small team of tech enthusiasts on a mission to educate and expose students to a diverse range of areas in software engineering and computer science. The conference enables attendees to discover knowledgeable speakers, connect with sponsoring companies, and make lifelong friends, all in a safe and comfortable space.
                </p>
            </div>
        </Div>
    );
});

Blurb.displayName = "Blurb";

export default Blurb;