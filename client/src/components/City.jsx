import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Weather5days from './Weather5days';
import GenMessage from './GenMessage';
import CurrentWeatherDetails from './CurrentWeatherDetails';
import WeatherConverter from './WeatherConverter';
import Resultspagesearch from './Resultspagesearch';


const City = (props) => {
  const [cityData, setCityData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const { city } = props.match.params;

  useEffect(() => {
    fetch(`/city/${city}`)
      .then((response) => response.json())
      .then((data) => {
        setCityData(data.current);
        setForecastData(data.forecast);
      });
  }, [city]);

    return (
    <div>
      <Resultspagesearch history={props.history}/>
      <h2>
        Current temperature for {city} is {cityData && <WeatherConverter fahrenheit={cityData.temp_f} celcius={cityData.temp_c} />} 
        {forecastData && (
          <span>
            <CurrentWeatherDetails current={cityData} forecast={forecastData} />
          </span>
        )}
      </h2>
      {cityData && forecastData && (
        <>
          <GenMessage info={cityData} />
          <Weather5days forecast={forecastData} />
        </>
      )}
    </div>
  );
};

export default City;
