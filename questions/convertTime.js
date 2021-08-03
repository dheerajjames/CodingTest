/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {
    if (!isNaN(seconds)) {
    let hours= Math.floor(seconds/3600);
    let minutes=  Math.floor((seconds - (hours * 3600))/60);
    let sec= seconds - (hours * 3600) - (minutes * 3600);
    let time = {
        hours: hours,
        minutes: minutes,
        seconds: sec,
    }
    return time;
    }
    else{
        throw new Error("Invalid Input");
    }
};

module.exports = convertTime;
