import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { gsap } from "gsap";

const Svg = styled.svg`
    @keyframes top1 {
        0% {
        transform: translateY(0px);
        }

        50% {
        transform: translateY(-32px);
        }

        100% {
        transform: translateY(0px);
        }
    }

    #top-1 {
        animation: top1 500ms ease forwards;
    }

    @keyframes top2 {
        0% {
        transform: translate(0px, 0px);
        }

        50% {
        transform: translate(8px, -12px);
        }

        100% {
        transform: translate(0px, 0px);
        }
    }

    #top-2 {
        animation: top2 600ms ease forwards;
    }

    @keyframes left1 {
        0% {
        transform: translate(0px, 0px);
        }

        50% {
        transform: translate(-24px, 12px);
        }

        100% {
        transform: translate(0px, 0px);
        }
    }

    #left-1 {
        animation: left1 550ms ease forwards;
    }

    @keyframes left2 {
        0% {
        transform: translate(0px, 0px);
        }

        50% {
        transform: translate(-24px, -16px);
        }

        100% {
        transform: translate(0px, 0px);
        }
    }

    #left-2 {
        animation: left2 350ms ease forwards;
    }

    @keyframes left3 {
        0% {
        transform: translate(0px, 0px);
        }

        50% {
        transform: translate(-12px, 0px);
        }

        100% {
        transform: translate(0px, 0px);
        }
    }

    #left-3 {
        animation: left3 300ms ease forwards;
    }

    @keyframes left4 {
        0% {
        transform: translate(0px, 0px);
        }

        50% {
        transform: translate(-8px, 8px);
        }

        100% {
        transform: translate(0px, 0px);
        }
    }

    #left-4 {
        animation: left4 300ms ease forwards;
    }

    @keyframes right1 {
        0% {
        transform: translate(0px, 0px);
        }

        50% {
        transform: translate(24px, -8px);
        }

        100% {
        transform: translate(0px, 0px);
        }
    }

    #right-1 {
        animation: right1 400ms ease forwards;
    }

    @keyframes right2 {
        0% {
        transform: translate(0px, 0px);
        }

        50% {
        transform: translate(12px, 0px);
        }

        100% {
        transform: translate(0px, 0px);
        }
    }

    #right-2 {
        animation: right2 400ms ease forwards;
    }

    @keyframes right3 {
        0% {
        transform: translate(0px, 0px);
        }

        50% {
        transform: translate(20px, 8px);
        }

        100% {
        transform: translate(0px, 0px);
        }
    }

    #right-3 {
        animation: right3 420ms ease forwards;
    }

    @keyframes right4 {
        0% {
        transform: translate(0px, 0px);
        }

        50% {
        transform: translate(20px, 16px);
        }

        100% {
        transform: translate(0px, 0px);
        }
    }

    #right-4 {
        animation: right4 340ms ease forwards;
    }

    @keyframes bottom1 {
        0% {
        transform: translate(0px, 0px);
        }

        50% {
        transform: translate(8px, 24px);
        }

        100% {
        transform: translate(0px, 0px);
        }
    }

    #bottom-1 {
        animation: bottom1 280ms ease forwards;
    }
    
    @keyframes bottom2 {
        0% {
        transform: translate(0px, 0px);
        }

        50% {
        transform: translate(2px, 26px);
        }

        100% {
        transform: translate(0px, 0px);
        }
    }

    #bottom-2 {
        animation: bottom2 480ms ease forwards;
    }

    @keyframes bottom3 {
        0% {
        transform: translate(0px, 0px);
        }

        50% {
        transform: translate(-8px, 20px);
        }

        100% {
        transform: translate(0px, 0px);
        }
    }

    #bottom-3 {
        animation: bottom3 240ms ease forwards;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }

      50% {
        transform: rotate(180deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    #rotate {
      transform-origin: center center;
      animation: rotate 600ms ease forwards;
    }
`;

export default function ExplodingLogo(props) {
    const { className, setIsLogoPlaying } = props;
    const rotateRef = useRef(null);
    const [logoKey, setLogoKey] = useState(1);

    useEffect(function(){
        if (!props.isLogoPlaying) return;
        setLogoKey(Math.random()); // to force rerender
    }, [props.isLogoPlaying]);

    return (
        <Svg width="164" height="164" viewBox="0 0 164 164" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} isLogoPlaying={props.isLogoPlaying} key={logoKey}>
            <g id="rotate" ref={rotateRef} onAnimationEnd={() => setIsLogoPlaying(false)}>
                <path
                    d="M81.8577 57.2152L96.9524 62.2891L106.178 75.3146L105.993 91.3243L96.4656 104.186L81.2529 108.988L66.1582 103.914L56.9324 90.8884L57.1178 74.8787L66.645 62.0173L81.8577 57.2152ZM81.8756 55.3452L65.5471 60.4996L55.334 74.287L55.1359 91.4414L65.0297 105.411L81.236 110.859L97.5646 105.704L107.778 91.917L107.976 74.7637L98.0819 60.7943L81.8756 55.3452Z"
                    fill="#1E1E1E" />
                <path
                    d="M82.3846 55.5429L97.4793 60.6168L106.705 73.6422L106.52 89.6519L96.9925 102.513L81.7798 107.315L66.685 102.241L57.4592 89.2161L57.6447 73.2063L67.1718 60.345L82.3846 55.5429ZM82.4025 53.6729L66.0739 58.8272L55.8608 72.6147L55.6627 89.769L65.5566 103.738L81.7629 109.186L98.0914 104.032L108.305 90.2446L108.503 73.0913L98.6088 59.122L82.4025 53.6729Z"
                    fill="#1E1E1E" />
                <path id="left-4" d="M63.0898 80.1692L74.0478 95.0124L92.803 93.3399L86.3756 65.8486L63.0898 80.1692Z"
                    fill="url(#paint0_linear)" />
                <path id="left-1" d="M56.6446 89.0848L66.3994 102.691L74.0479 95.0126L63.0898 80.1694L56.6446 89.0848Z"
                    fill="url(#paint1_linear)" />
                <path id="left-2" d="M63.0899 80.1696L56.9407 71.9588L61.9309 64.5947L86.3757 65.8491L63.0899 80.1696Z"
                    fill="url(#paint2_linear)" />
                <path id="right-3" d="M86.3757 65.8486L92.803 93.3399L103.972 81.6326L86.3757 65.8486Z" fill="url(#paint3_linear)" />
                <path id="top-1" d="M61.9308 64.5944L86.3757 65.8488L82.7932 53.0962L66.2508 58.5317L61.9308 64.5944Z"
                    fill="url(#paint4_linear)" />
                <path id="right-1" d="M103.972 81.6327L86.3757 65.8487L98.5981 58.7407L108.397 72.6432L103.972 81.6327Z"
                    fill="url(#paint5_linear)" />
                <path id="left-3" d="M56.9786 71.9116L56.6446 89.0848L63.0898 80.1695L56.9786 71.9116Z" fill="url(#paint6_linear)" />
                <path id="right-2" d="M108.397 72.6431L103.972 81.6326L108.397 89.7859V72.6431Z" fill="#E69B47" />
                <path id="bottom-3" d="M74.0479 95.0127L66.3994 102.691L82.3718 107.974L74.0479 95.0127Z" fill="url(#paint7_linear)" />
                <path id="bottom-2" d="M74.0479 95.0128L82.3718 107.974L92.803 93.3403L74.0479 95.0128Z" fill="url(#paint8_linear)" />
                <path id="bottom-1" d="M82.3718 107.974L92.8272 93.2993L98.282 102.748L82.3718 107.974Z" fill="url(#paint9_linear)" />
                <path id="right-4" d="M92.803 93.3401L98.282 102.748L108.397 89.7861L103.972 81.6328L92.803 93.3401Z"
                    fill="url(#paint10_linear)" />
                <path id="top-2" d="M98.5981 58.7408L82.7932 53.0962L86.3757 65.8488L98.5981 58.7408Z" fill="url(#paint11_linear)" />
                <path d="M92.7673 93.268L74.1007 94.9603L56.9418 71.9795" stroke="#1E1E1E" strokeWidth="0.731707"
                    strokeMiterlimit="10" />
                <path d="M66.4005 102.711L74.1006 95.0649L82.3192 108.027" stroke="#1E1E1E" strokeWidth="0.731707"
                    strokeMiterlimit="10" />
                <path d="M56.6468 89.1044L63.0372 80.1169L86.4284 65.9009L92.7673 93.2678L82.3034 108.023" stroke="#1E1E1E"
                    strokeWidth="0.731707" strokeMiterlimit="10" />
                <path d="M62.2997 64.6465L86.4285 65.9008L104.025 81.5803L92.7673 93.2677L98.3243 102.711" stroke="#1E1E1E"
                    strokeWidth="0.731707" strokeMiterlimit="10" />
                <path d="M98.6793 58.7836L86.4284 65.901L82.846 53.3574" stroke="#1E1E1E" strokeWidth="0.731707"
                    strokeMiterlimit="10" />
                <path d="M108.374 72.6826L104.235 81.5802L108.134 89.5244" stroke="#1E1E1E" strokeWidth="0.731707"
                    strokeMiterlimit="10" />
                <path
                    d="M82.8155 53.926L98.4981 59.1985L108.078 72.7236L107.886 89.3396L97.9955 102.691L82.1917 107.679L66.5091 102.407L56.9292 88.8818L57.121 72.2658L67.0117 58.9142L82.8155 53.926ZM82.8239 53.0459L66.4954 58.2003L56.2823 71.9877L56.0842 89.1421L65.978 103.111L82.1843 108.559L98.5129 103.405L108.726 89.6177L108.924 72.4644L99.0292 58.495L82.8239 53.0459Z"
                    fill="#1E1E1E" />
            </g>
            <defs>
                <linearGradient id="paint0_linear" x1="77.9464" y1="65.8486" x2="77.9464" y2="95.0124"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.324" stopColor="#FCEE21" />
                    <stop offset="1" stopColor="#F9E44D" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="69.9671" y1="84.1085" x2="61.0715" y2="99.6394"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FCBB24" />
                    <stop offset="1" stopColor="#F0A13C" />
                </linearGradient>
                <linearGradient id="paint2_linear" x1="60.9301" y1="65.1036" x2="80.2621" y2="76.3542"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FCCA24" />
                    <stop offset="1" stopColor="#F9E02B" />
                </linearGradient>
                <linearGradient id="paint3_linear" x1="85.9999" y1="81.6502" x2="99.4325" y2="73.8328"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F9E429" />
                    <stop offset="1" stopColor="#F8D72E" />
                </linearGradient>
                <linearGradient id="paint4_linear" x1="74.1532" y1="53.0962" x2="74.1532" y2="65.8488"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="2.23767e-07" stopColor="#FAB826" />
                    <stop offset="1" stopColor="#FBC629" />
                </linearGradient>
                <linearGradient id="paint5_linear" x1="86.3757" y1="70.1867" x2="108.397" y2="70.1867"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="2.23767e-07" stopColor="#FCBB24" />
                    <stop offset="1" stopColor="#EBA73C" />
                </linearGradient>
                <linearGradient id="paint6_linear" x1="56.6446" y1="80.4981" x2="63.0898" y2="80.4981"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="4.47534e-07" stopColor="#E3A755" />
                    <stop offset="1" stopColor="#EB9D3C" />
                </linearGradient>
                <linearGradient id="paint7_linear" x1="82.3718" y1="101.494" x2="66.3991" y2="101.494"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="4.47534e-07" stopColor="#E3A755" />
                    <stop offset="0.5866" stopColor="#EB9D3C" />
                </linearGradient>
                <linearGradient id="paint8_linear" x1="92.803" y1="100.657" x2="74.0479" y2="100.657"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FBC628" />
                    <stop offset="0.4907" stopColor="#FAB826" />
                </linearGradient>
                <linearGradient id="paint9_linear" x1="90.3269" y1="93.2992" x2="90.3269" y2="107.974"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="4.47534e-07" stopColor="#E3A755" />
                    <stop offset="1" stopColor="#EB9D3C" />
                </linearGradient>
                <linearGradient id="paint10_linear" x1="97.2285" y1="85.4951" x2="104.929" y2="98.9403"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.271" stopColor="#FACA2A" />
                    <stop offset="1" stopColor="#FCBD25" />
                </linearGradient>
                <linearGradient id="paint11_linear" x1="90.6954" y1="53.0947" x2="90.6952" y2="65.8471"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="6.71301e-07" stopColor="#F5B251" />
                    <stop offset="1" stopColor="#F9D247" />
                </linearGradient>
            </defs>
        </Svg>
    );
}

ExplodingLogo.propTypes = {
    className: PropTypes.string,
    isLogoPlaying: PropTypes.bool,
    setIsLogoPlaying: PropTypes.func
};