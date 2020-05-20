import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
const goodWeather = [
  'Sunny',
  'Clear'
]
const cloudyWeather = [
  'Cloudy',
  'Overcast',
  'Patchy rain possible'
]
const lightRain = [
  "Patchy light drizzle",
  "Light drizzle",
  "Patchy light rain",
  "Light rain",
  "Light rain shower",
  "Patchy light rain with thunder"
]
const moderateRain = [
  "Moderate rain at times",
  "Moderate rain",
  "Heavy rain at times"
]
const heavyRain = [
  "Moderate or heavy rain shower",
  'Moderate or heavy rain with thunder',
  "Torrential rain shower",
  "Heavy rain",
  "Thundery outbreaks possible",
  "Heavy freezing drizzle"
]
const foggy = [
  "Mist",
  "Fog",
  "Freezing fog"
]
const coldCondition =[
  "Light freezing rain",
  "Patchy freezing drizzle possible",
  "Moderate or heavy freezing rain"
]
const snow =[
  "Patchy light snow with thunder",
  "Patchy snow possible",
  "Patchy moderate snow",
  "Light snow",
  "Patchy light snow",
  "Blowing snow",
  "Moderate snow",
  "Patchy heavy snow",
  "Light snow showers",
  "Light snow showers",
]
const heavySnow = [
  "Moderate or heavy snow with thunder",
  "Blizzard",
  "Heavy snow",
  "Ice pellets",
  "Light showers of ice pellets",
  "Moderate or heavy showers of ice pellets",
  "Light sleet showers",
  "Moderate or heavy sleet",
  "Moderate or heavy sleet showers",
  "Patchy sleet possible",
  "Light sleet"
]
const GenMessage = (props) => {
  const [arrayMessage, setArrayMessage] = useState([
    'The sky is clear and sunny. Wear your sunblock and enjoy the Vitamin D!',
    'The sun is shining above the clouds. Grab your friends and family for some outside activity fun.',
    'It\'s cloudy and gray today. Consider taking an umbrella in case it drizzles.',
    'Take an umbrella with you today, and have a plan B if you\'re planning an outdoor activity.',
    'Take your umbrella and a rain coat when going outside. Your outdoor plants will be well hydrated today.',
    'When it rains, it pours. Plan ahead and remember to check the windshield wiper of your car before driving.',
    'Consider staying off the road today until the fog clears. Wear reflective gear if you\'re going for a walk.',
    'Today is forecasted to be cold and wet. It is advisable to put on warm clothing and wear your rain boots.',
    'It\'s a snow day. Don\'t forget to grab your gloves and winter hat! Considering warming up with a hot drink before leaving home.',
    'It\'s better to stay home for now but don\'t worry there\'s always a calm after the storm.'
  ]);
  const [message, setMessage] = useState()
  useEffect(()=>{
    let weatherCond = props.info.condition.text;
    if (goodWeather.includes(weatherCond)) {
      setMessage(arrayMessage[0]);
    } else if (weatherCond  === 'Partly cloudy') {
      setMessage(arrayMessage[1]);
    } else if (cloudyWeather.includes(weatherCond)) {
      setMessage(arrayMessage[2]);
    }else if (lightRain.includes(weatherCond)) {
      setMessage(arrayMessage[3]);
    }else if (moderateRain.includes(weatherCond)) {
      setMessage(arrayMessage[4]);
    }else if (heavyRain.includes(weatherCond)) {
      setMessage(arrayMessage[5]);
    }else if (foggy.includes(weatherCond)) {
      setMessage(arrayMessage[6]);
    }else if (coldCondition.includes(weatherCond)) {
      setMessage(arrayMessage[7]);
    }else if (snow.includes(weatherCond)){
      setMessage(arrayMessage[8]);
    }else if (heavySnow.includes(weatherCond)){
      setMessage(arrayMessage[9]);
    }
  }, []);
  return (
    <Container>
      <h1>{props.info.condition.text}</h1>
      <h2>{message}</h2>
    </Container>
  );
};
export default GenMessage;