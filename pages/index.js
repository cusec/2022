import Head from 'next/head'
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import styles from '../styles/Home.module.css'

// These are min minutes, so 1020 = 17 * 60
const SUNRISE_START_TIME = 300; // 5am
const SUNRISE_END_TIME = 420; // 7am
const MIDDAY = 720; // 12pm
const LATE_NOON = 900; // 3pm
const SUNSET_START_TIME = 1020; // 5pm
const SUNSET_END_TIME = 1140; // 7pm
const MIDNIGHT = 1440; // 12am

const timeToGradient = {
  sunset: [["#06042a", 0], ["#567e99", 57], ["#ffd700", 91], ["#ffac00", 100]],
  sunset2: [["#06042a", 0], ["#745999", 80], ["#ffac00", 100]],
  sunset3: [["#06042a", 82], ["#4d3967", 92], ["#ffac00", 100]],
  night: [["#06042a", 0], ["#01033e", 100], ["#06042a", 100]],
  night2: [["#06042a", 50], ["#88799f", 100]],
  sunrise: [["#06042a", 0], ["#1c397e", 63], ["#ffeccd", 83], ["#ec9700", 100]]
}

const lerp = (a, b, percent) => {
  return (1 - percent) * a + percent * b;
}

const generateBetweenColour = (c1, c2, percent) => {
  const [r1, g1, b1] = c1.match(/(\d|\w){1,2}/g).map(c => parseInt(c, 16));
  const [r2, g2, b2] = c2.match(/(\d|\w){1,2}/g).map(c => parseInt(c, 16));

  return `rgb(${Math.round(lerp(r1, r2, percent))}, ${Math.round(lerp(g1, g2, percent))}, ${Math.round(lerp(b1, b2, percent))})`;
}

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  background: ${props => props.bgColour};
`;

export default function Home() {
  const [bgColour, setBgColour] = useState("blue");
  const [hour, setHour] = useState(0);
  //const hour = 17;
  const [min, setMin] = useState(0);

  const generateColour = () => {
    const now = new Date();
    //const currHour = now.getHours();
    //const currMin = now.getMinutes();
    const currHour = hour;
    const currMin = min;
    //setBgColour(`linear-gradient(180deg, ${c[0][0]} ${c[0][1]}%, ${c[1][0]} ${c[1][1]}%, ${c[2][0]} ${c[2][1]}%, ${c[3][0]} ${c[3][1]}%)`);

    const colours = [];

    const convertedTime = currHour * 60 + currMin;
    console.log(hour, min, convertedTime);


    // Sunrise
    if (convertedTime >= SUNRISE_START_TIME && convertedTime <= SUNRISE_END_TIME) {
      const timePercent = ((convertedTime - SUNRISE_START_TIME) / (SUNRISE_END_TIME - SUNRISE_START_TIME));

      const c = timeToGradient["sunrise"];
      colours.push([c[0][0], (1 - timePercent) * 100]);
      colours.push([c[1][0], 100 - (timePercent * (100 - c[1][1]))]);
      colours.push([c[2][0], 100 - (timePercent * (100 - c[2][1]))]);
      colours.push([c[3][0], 100]);
    }
    // Morning
    else if (convertedTime > SUNRISE_END_TIME && convertedTime <= MIDDAY) {
      const timePercent = ((convertedTime - SUNRISE_END_TIME) / (MIDDAY - SUNRISE_END_TIME));

      const c = timeToGradient["sunrise"];
      colours.push([c[0][0], c[0][1]]);
      colours.push([c[1][0], c[1][1] - (timePercent * c[1][1])]);
      colours.push([c[2][0], c[2][1] - (timePercent * c[2][1])]);
      colours.push([c[3][0], 100]);
      console.log("morning", convertedTime, timePercent, colours);
    }
    // Afternoon
    else if (convertedTime > MIDDAY && convertedTime <= LATE_NOON) {
      const timePercent = ((convertedTime - MIDDAY) / (LATE_NOON - MIDDAY));

      const c1 = timeToGradient["sunrise"];
      const c2 = timeToGradient["sunset"];
      colours.push([generateBetweenColour(c1[2][0], c2[2][0], timePercent), 0]);
      colours.push([generateBetweenColour(c1[3][0], c2[3][0], timePercent), 100]);

      console.log("afternoon", convertedTime, timePercent, colours);
    }
    // Late noon
    else if (convertedTime > LATE_NOON && convertedTime < SUNSET_START_TIME) {
      const timePercent = ((convertedTime - LATE_NOON) / (SUNSET_START_TIME - LATE_NOON));

      const c = timeToGradient["sunset"];
      colours.push([c[0][0], c[0][1] * timePercent]);
      colours.push([c[1][0], c[1][1] * timePercent]);
      colours.push([c[2][0], c[2][1] * timePercent]);
      colours.push([c[3][0], 100]);

      console.log(convertedTime, timePercent, colours);
    }
    // Sunset
    else if (convertedTime >= SUNSET_START_TIME && convertedTime <= SUNSET_END_TIME) {
      const timePercent = ((convertedTime - SUNSET_START_TIME) / (SUNSET_END_TIME - SUNSET_START_TIME));

      const c = timeToGradient["sunset"];
      colours.push([c[0][0], timePercent * 100]);
      colours.push([c[1][0], (100 - c[1][1]) * timePercent + c[1][1]]);
      colours.push([c[2][0], (100 - c[2][1]) * timePercent + c[2][1]]);
      colours.push([c[3][0], 100]);
    }
    // Night
    else {
      const timePercent = ((convertedTime - SUNRISE_START_TIME) / (SUNRISE_START_TIME - SUNSET_END_TIME));
      
      const c = timeToGradient["night"];
      colours.push([c[0][0], c[0][1]]);
      colours.push([c[1][0], (1 - timePercent) * 100]);
      colours.push([c[2][0], c[2][1]])
    }
    const formattedColours = colours.map(c => `${c[0]} ${c[1]}%`).join(", ");

    setBgColour(`linear-gradient(180deg, ${formattedColours})`);
  }

  useEffect(() => {
    generateColour();
  }, [min]); 

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Background bgColour={bgColour}></Background>
        {/*<button style={{position:"absolute"}} onClick={() => { setMin(min + 10); console.log(min) }}>click</button>*/}
        <button style={{position:"absolute"}} onClick={() => { 
          setInterval(() => {setMin(min => min === MIDNIGHT ? 0 : min + 3); console.log(min);}, 300);
         }}>press</button>
      </main>
    </div>
  )
}
