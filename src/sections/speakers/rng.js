export const LOW_PREFERRED_SKEW = 2; // Skew towards lower numbers
export const HIGH_PREFERRED_SKEW = 0.4; // Skew towards higher numbers

// Code stolen from https://stackoverflow.com/a/49434653
export const randNBoxMuller = (min, max, skew) => {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) 
        num = randNBoxMuller(min, max, skew); // resample between 0 and 1 if out of range
    
    else{
        num = Math.pow(num, skew); // Skew
        num *= max - min; // Stretch to fill range
        num += min; // offset to min
    }
    return num;
};