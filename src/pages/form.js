import { useEffect } from "react";

// Apps scripts project: https://script.google.com/u/1/home/projects/1BeFTrYDmMIQrLoSHt85Hdl-u3Jv5RcuwGVOQN9XleQ-GtZivNtAqkgyY/edit

const SCRIPT_URL = "https://script.google.com/a/macros/cusec.net/s/AKfycbx9X2_PPmndE_Q6s8fv-VrtEZrwDjFTp533KWLCrqe6jOrD6nT9Zux6CdANSZJPGAPh/exec";

export default function Form() {
    useEffect(() => {
        const request = new Request(SCRIPT_URL, { 
            method: "POST",
            body: "['test text', 'aaaaa']"
        });

        fetch(request)
            .then(response => console.log(response));
    }, []);

    return (<></>);
}