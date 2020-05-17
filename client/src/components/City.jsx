import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Weather5days from './Weather5days';
import GenMessage from './GenMessage';

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
      <h1>This is the weather results page</h1>
      <h2>
        Current temperature for {city} is {cityData && cityData.temp_f} °F
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
