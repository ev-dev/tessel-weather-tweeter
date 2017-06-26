'use strict';
const tessel = require('tessel');
const path = require('path');
const av = require('tessel-av');
const accel = require('accel-mma84')
const weather = require('weather-js');
const Twit = require('twit');

const purpleRain = path.join(__dirname, 'purple-rain.mp3');
const soundPurp = new av.Player(purpleRain);

const sunshine = path.join(__dirname, 'sunshine.mp3');
const soundSun = new av.Player(sunshine);

const speak = new av.Speaker();

var T = new Twit({
    consumer_key: 'Ec2yjqikQDVFLihJHwYLcice8',
    consumer_secret: 'OfIdvpTQsBqpIHoDkAxiW5x6SISXqcj70yXj9IERSGEBpWZAfi',
    access_token: '280692030-Hj8z5Th7Dol2IMmLmIPq24AZekrZmhDUWsqeHRxk',
    access_token_secret: 'L0oHMcF9DSDHsc2Yx80UIBkiPsJwgrWJ81df9AuouqrP4',
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests. 
})

weather.find({
    search: 'New York, NY',
    degreeType: 'F'
}, (err, result) => {
    if (err) console.log(err);
    let temp = JSON.stringify(result[0].current.temperature, null, 2);
    let forecast = JSON.stringify(result[0].current.skytext);
    
    let song;
    if (forecast.toLowerCase() === 'sunny') {
        T.post('statuses/update', { status: 'its sunny out' }, function(err, data, response) {
            if (err) console.log(err);
            console.log(data)
        })
        speak.say(`The temperature is ${temp} and the forecast is ${forecast}`);
        // soundSun.play();
    }

    else if (forecast.toLowerCase() === 'rainy') {
        T.post('statuses/update', { status: 'its rainy out' }, function (err, data, response) {
            if (err) console.log(err);
            console.log(data)
        })
        speak.say(`The temperature is ${temp} and the forecast is ${forecast}`);
        // soundPurp.play();
    }

    else {
        T.post('statuses/update', { status: 'idk the weather' }, function (err, data, response) {
            if (err) console.log(err);
            console.log(data)
        })
        speak.say(`The temperature is ${temp} and the forecast is ${forecast}`);
        // soundSun.play();
    }
});

