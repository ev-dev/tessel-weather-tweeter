'use strict';
const path = require('path');
const tessel = require('tessel');
const av = require('tessel-av');
// const weather = require('weather-js');
const mp3 = path.join('/Users/admin/webdev/JS/learn-js/fullstack/workshops/tessel-hackathon/', 'yoda-mudhole.mp3');
// const purpleRain = path.join(__dirname, '')

// const yap = require('youtube-audio-player');
const sound = new av.Player();
// const player = new av.Player(mp3);
sound.play(mp3)

// const songsDict = {
//     sunny: 'https://www.youtube.com/watch?v=iPUmE-tne5U',
//     rainy: 'https://www.youtube.com/watch?v=IE9_JUDBPGM',
//     snowy: 'https://www.youtube.com/watch?v=yXQViqx6GMY',
//     cloudy: 'https://www.youtube.com/watch?v=3Fmo8I_XSCI'
// }

// weather.find({
//     search: 'New York, NY',
//     degreeType: 'F'
// }, (err, result) => {
//     if (err) console.log(err);
//     let temp = JSON.stringify(result[0].current.temperature, null, 2);
//     let forecast = JSON.stringify(result[0].current.skytext);
    
//     let song;
//     if (forecast.toLowerCase().includes('sunny')) song = 'sunny';

    // sound.say(`The temperature is ${temp} and the forecast is ${forecast}`);
    // yap.play({ url: songsDict[song] });

// })

