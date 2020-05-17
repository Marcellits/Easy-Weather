import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Weather5days from './Weather5days';
import GenMessage from './GenMessage';

const City = (props) => {
  const [cityData, setCityData] = useState(null);
  const { city } = props.match.params;

  useEffect(() => {
    fetch(`/city/${city}`)
      .then((response) => response.json())
      .then((data) => {
        setCityData(data.current);
      });
  }, []);

  return (
    <div>
      <h1>This is the weather results page</h1>
      <h1>
        Current temperature for {city} is {cityData && cityData.temp_f} °F
      </h1>
      {
        cityData && (
          <>
            <GenMessage info={cityData} />
            <Weather5days />
          </>
        )
      }
      
    </div>
  );
};

export default City;
