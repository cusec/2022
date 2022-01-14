import React from "react";
import { A } from "components/elements";

export const PROVINCES = {
    ONTARIO: "ON",
    QUEBEC: "QC",
    ALBERTA: "AB",
    MANITOBA: "MB"
};

export const CITIES = {
    WATERLOO: {
        name: "Waterloo, ON",
        province: PROVINCES.ONTARIO,
        hds: [
            {
                name: "Safiya Mufti",
                uni: "University of Waterloo",
                email: "waterloo@cusec.net",
                img: "SafiyaMufti.jpg",
                desc: (
                    <span className="text-sm">
                        Funded by the <A href="https://uwaterloo.ca/math-endowment-fund/" target="_blank" rel="noopener noreferrer" className="font-bold">University of Waterloo's Mathematics Endowment Fund (MEF)</A>.
                    </span>
                )
                    
            }
        ]
    },
    OTTAWA: {
        name: "Ottawa, ON",
        province: PROVINCES.ONTARIO,
        hds: [
            {
                name: "Aaditya Chopra",
                uni: "Carleton University",
                email: "carleton@cusec.net",
                img: "AadityaChopra.jpg"
            },
            {
                name: "Emily Jiawei Chen",
                uni: "University of Ottawa",
                email: "ottawa@cusec.net",
                img: "EmilyChen.jpg"
            }
        ]
    },
    MONTREAL: {
        name: "Montreal, QC",
        province: PROVINCES.QUEBEC,
        hds: [
            {
                name: "Mohanna Shahrad",
                uni: "McGill University",
                email: "mcgill@cusec.net",
                img: "MohannaShahrad.jpg"
            }
        ]
    },
    CALGARY: {
        name: "Calgary, AB",
        province: PROVINCES.ALBERTA,
        hds: [
            {
                name: "Ines Rosito",
                uni: "University of Calgary",
                email: "calgary@cusec.net",
                img: "InesRosito.jpg"
            }
        ]
    },
    WINNIPEG: { 
        name: "Winnipeg, MB",
        province: PROVINCES.MANITOBA,
        hds: [
            {
                name: "Kunal Rajpal",
                uni: "University of Manitoba",
                email: "manitoba@cusec.net",
                img: "KunalRajpal.jpg"
            }
        ]
    }
};