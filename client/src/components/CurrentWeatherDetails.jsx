import React from 'react';
import '../assets/styles/currentWeatherDetails.css';

const CurrentWeatherDetails = (props) => {
  
  const currentForecastDay = props.forecast.forecastday[0].day;

  return (
    <>
      <div class="details">
        Low:  {(currentForecastDay.mintemp_f).toFixed()}°F  
        <span class='pipe'> | </span> 
        <span>  {(currentForecastDay.mintemp_c).toFixed()}°C </span> 
      </div>
      <div class="details">
        High:  {(currentForecastDay.maxtemp_f).toFixed()}°F 
        <span class='pipe'> | </span> 
        <span>  {(currentForecastDay.maxtemp_f).toFixed()}°C</span>
      </div> 
      <div class="details" >
        Feels like:  {(props.current.feelslike_f).toFixed()}°F 
        <span class='pipe'> | </span> 
        <span> {(props.current.feelslike_c).toFixed()} °C </span>
      </div> 
      
    </>
      
  );
};

export default CurrentWeatherDetails;
