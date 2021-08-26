import Head from "next/head";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import tw from "twin.macro";
import { Button, Subtitle } from "../components/elements";
import Nav from "../components/nav";
import Logo from "../components/logo";
import Cursor from "../components/cursor";
import TitleSVG from "../svgs/title";

const Main = styled.main`
    width: 80vw;
`;

const Title = styled.div`
    ${tw`flex leading-none h-24`}

    *:last-child {
        ${tw`ml-4`}
    }
`;


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>CUSEC</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Cursor></Cursor>
            
            <Nav></Nav>

            <Main>
                <header className="h-screen flex flex-col justify-center">
                    <Title>
                        <Logo></Logo>
                        <h1>CUSEC</h1>
                    </Title>
                    
                    <h2>Canadian University Software Engineering Conference</h2>
                    <Subtitle>January | virtual x in person experience</Subtitle>

                    <div className="flex justify-end">
                        <Button className="custom-shadow"> sign up!</Button>
                    </div>

                    <TitleSVG className="animate-on-load"/>
                </header>

                <section id="about" className="h-screen flex flex-col justify-center">
                    <div className="mb-8">
                        <h2>Canada’s annual software engineering conference</h2>
                        <p>
                            Join thousands of students from across Canada for a weekend full of interactive knowledge sharing, mentoring, career opportunities and more as we explore the endless possibilities of the future of tech.
                        </p>
                    </div>
                    
                    <div className="mt-8">
                        <h2>Why join?</h2>
                        <p>
                            CUSEC is an annual software engineering conference organized for students by students. It was founded in 2002 by a small team of tech enthusiasts on a mission to educate and expose students to a diverse range of areas in software engineering and computer science. The conference enables attendees to discover knowledgeable speakers, connect with sponsoring companies, and make lifelong friends, all in a safe and comfortable space.
                        </p>
                    </div>
                </section>
            </Main>
        </div>
    );
}
