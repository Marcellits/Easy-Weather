import React, { useEffect, useState } from 'react';
import City from './City';
import '../assets/styles/currentWeatherDetails.css';
import WeatherIconComponent from './WeatherIconComponent';

const CurrentWeatherDetails = (props) => {
  console.log('hellooooooooo', props);

  return (
    <>
    {/* These are the Low and High details */}
      <span>Low: {props.forecast.forecastday[0].day.mintemp_f}</span>
      <span>High: {props.forecast.forecastday[0].day.maxtemp_f}</span> 
      <span>Feels like: {props.current.feelslike_f} </span>

      <span>
            <WeatherIconComponent  iconPathName={props.current.condition.icon}  />
          </span>
      
    </>
  );

// Const MoreWeatherDetails = (props) => {
//     console.log('TESTING')
// };

  //return <div>{props.forecas}</div>
};

export default CurrentWeatherDetails;
