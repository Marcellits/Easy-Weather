import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Weather5days from './Weather5days';
import GenMessage from './GenMessage';
import WeatherConverter from './WeatherConverter'
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
  }, []);

  console.log('what is forecastdata', forecastData)

  return (
    <div>
      <h2>
        Today's Forecast in {city} is {cityData && cityData.temp_f} <WeatherConverter info={cityData}/>
      </h2>
      {
        cityData && forecastData && (
          <>
            <GenMessage info={cityData} />
            <Weather5days forecast={forecastData}/>
          </>
        )
      }
      
    </div>
  );
};

export default City;
