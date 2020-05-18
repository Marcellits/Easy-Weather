import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const cloudyConditions = [
  'Cloudy',
  'Overcast',
  'Patchy rain possible'
]



const GenMessage = (props) => {
  const [arrayMessage, setArrayMessage] = useState([
    'Oh, how beautiful blue sky today!',
    'The sky looks beautiful, don\'t you think!?',
    'When leaving the house, it might be a good idea to take an umbrella.',
    'When leaving the house, it might be a good idea to take an umbrella and a coat.',
    'Did you get your umbrella? Maybe you should check the windshield wiper of your car before driving.',
    'Not a good time to drive.Be safe!',
    'Today is cold. It is advisable to put on warm clothing',
    'Hey! Don\'t you love the snow? Don\'t forget to get the gloves and the winter hat! ',
    'Wow! I think it\'s better to stay home for now. How about having a hot drink ?'
  ]);
  
  
  const [message, setMessage] = useState()

  useEffect(()=>{
    let weatherCond = props.info.condition.text;
    if (weatherCond === 'Sunny'|| weatherCond === 'Clear'
      ) {
      setMessage(arrayMessage[0]);
    } else if (weatherCond  === 'Partly cloudy') {
      setMessage(arrayMessage[1]);
    } else if (cloudyConditions.includes(weatherCond)) {
      setMessage(arrayMessage[2]);
    }else if (
      weatherCond ==="Patchy light drizzle"
      || weatherCond === "Light drizzle"
      || weatherCond === "Patchy light rain"
      || weatherCond === "Light rain"
      || weatherCond ==="Light rain shower"
      || weatherCond === "Patchy light rain with thunder"
      ){
      setMessage(arrayMessage[3]);
    }else if (
      weatherCond  === "Moderate rain at times"
      || weatherCond === "Moderate rain"
      || weatherCond === "Heavy rain at times"
      || weatherCond === "Moderate or heavy rain shower"
      ){
      setMessage(arrayMessage[4]);
    }else if (
      weatherCond  === 'Moderate or heavy rain with thunder'
      || weatherCond === "Torrential rain shower"
      || weatherCond === "Heavy rain"
      || weatherCond === "Thundery outbreaks possible"
      || weatherCond === "Heavy freezing drizzle"
      ){
      setMessage(arrayMessage[5]);
    }else if (
      weatherCond  === "Mist"
      || weatherCond === "Fog"
      || weatherCond === "Freezing fog"
      ){
      setMessage(arrayMessage[6]);
    }else if (
      weatherCond  === "Light freezing rain"
      || weatherCond === "Patchy freezing drizzle possible"
      || weatherCond === "Moderate or heavy freezing rain"
      ){
      setMessage(arrayMessage[7]);
    }else if (
      weatherCond  === "Patchy light snow with thunder"
      || weatherCond === "Patchy snow possible"
      || weatherCond === "Patchy moderate snow"
      || weatherCond === "Light snow"
      || weatherCond === "Patchy light snow"
      || weatherCond === "Blowing snow"
      || weatherCond === "Moderate snow"
      || weatherCond === "Patchy heavy snow"
      || weatherCond === "Light snow showers"
      || weatherCond === "Light snow showers"
      ){
      setMessage(arrayMessage[8]);
    }else if (
      weatherCond  === "Moderate or heavy snow with thunder"
      || weatherCond === "Blizzard"
      || weatherCond === "Heavy snow"
      || weatherCond === "Ice pellets"
      || weatherCond === "Light showers of ice pellets"
      || weatherCond === "Moderate or heavy showers of ice pellets"
      || weatherCond === "Light sleet showers"
      || weatherCond === "Moderate or heavy sleet"
      || weatherCond === "Moderate or heavy sleet showers"
      || weatherCond === "Patchy sleet possible"
      || weatherCond === "Light sleet"
      ){
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
