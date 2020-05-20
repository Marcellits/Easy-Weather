import React from 'react';
import WeatherIconComponent from './WeatherIconComponent';
import '../assets/styles/currentWeatherDetails.css';

const CurrentWeatherDetails = (props) => {
  console.log('hellooooooooo', props);

  const currentForecastDay = props.forecast.forecastday[0].day;

  return (
    <>
    {/* These are the Low and High details */}
      <span>
        Low: °F {currentForecastDay.mintemp_f} / <span> °C {currentForecastDay.mintemp_c} </span> 
      </span>
      <span>High: °F {currentForecastDay.maxtemp_f} / </span> <span> °C {currentForecastDay.maxtemp_f}</span>
      <span>Feels like: °F {props.current.feelslike_f} / </span> <span> °C {props.current.feelslike_c} </span>

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
