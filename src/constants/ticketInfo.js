import React from "react";

export const TICKET_INFO = {
    basic: {
        title: "Basic",
        price: <><span className="line-through text-secondary">$2</span> Free!</>,
        perks: [
            "Hopin virtual conference",
            "Discord access",
            "Social events and networking opportunities",
            "Talks and workshops"
        ]
    },
    vip: {
        title: "VIP",
        price: "$35",
        perks: [
            "All perks from the basic tier",
            "Exclusive CUSEC 2022 merch",
            "Exclusive VIP-only networking opportunities"
        ]
    }
};