import { A } from "components/elements";

export default function Faq() {
    const INFO_EMAIL = "info@cusec.com";

    return (
        <section id="faq" className="h-screen flex flex-col justify-center">
            <h2>Got questions?</h2>
            <p>
                Can't find what you're looking for? Send us an email to <A href={`mailto:${INFO_EMAIL}`}>{INFO_EMAIL}</A>
            </p>

        </section>
    );
}