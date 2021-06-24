import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Action } from './components/elements';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Display</h1>

      <h2>Header 1</h2>

      <h3>Header 2</h3>

      <figure>
        <img src="/logo.svg"/>
        <figcaption>Subtitle</figcaption>
      </figure>

      Body

      <Action>Action</Action>

      <small>Detail</small>

      <Button>primary</Button>
      <Button colourScheme="secondary">secondary</Button>
      <Button colourScheme="secondary" disabled>disabled</Button>

      <Button className="shadow">Tailwind shadow test</Button>

      <div style={{width: "50px", height: "15px"}}></div>

      <Button style={{boxShadow: "0px 4px 12px rgba(30, 30, 30, 0.15)"}}>Custom shadow test</Button>

      <div style={{width: "50px", height: "15px"}}></div>
    </div>
  )
}
