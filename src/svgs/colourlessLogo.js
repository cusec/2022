import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const ColourlessLogo = forwardRef(({ colour="var(--light)", style }, ref) => {
    return (
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} style={style}>
            <path d="M14.5452 16.2007L7.77663 16.8143L1.55481 8.48145" stroke={colour} strokeMiterlimit="10"/>
            <path d="M4.98462 19.6246L7.7767 16.8521L10.7568 21.552" stroke={colour} strokeMiterlimit="10"/>
            <path d="M1.44788 14.691L3.76506 11.4321L12.2468 6.27734L14.5452 16.2006L10.751 21.551" stroke={colour} strokeMiterlimit="10"/>
            <path d="M3.49768 5.82227L12.2468 6.2771L18.6272 11.9625L14.5453 16.2004L16.5603 19.6245" stroke={colour} strokeMiterlimit="10"/>
            <path d="M16.6889 3.69653L12.2468 6.27732L10.9478 1.729" stroke={colour} strokeMiterlimit="10"/>
            <path d="M20.2042 8.73633L18.7035 11.9626L20.1171 14.8432" stroke={colour} strokeMiterlimit="10"/>
            <path d="M4.96067 3.5804L10.8814 1.71143L16.7575 3.68729L20.3454 8.75259L20.2736 14.9724L16.5703 19.9718L10.6495 21.8407L4.77308 19.8653L1.18555 14.8L1.25737 8.57976L4.96067 3.5804Z" stroke={colour} strokeWidth="1.5"/>
        </svg>
    );
});

ColourlessLogo.displayName = "ColourlessLogo";

ColourlessLogo.propTypes = {
    colour: PropTypes.string,
    style: PropTypes.object
};

export default ColourlessLogo;