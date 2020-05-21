import React from 'react'
import {useState} from 'react'

  const WeatherConverter = (props) => {
    const [currentWeatherDetails, setCurrentWeatherDetails] = useState('f');
    const temperature =
      currentWeatherDetails === 'f' ? props.fahrenheit : props.celcius;
    const setToF = () => setCurrentWeatherDetails('f');
    const setToC = () => setCurrentWeatherDetails('c');
    return (
      <div style={{marginLeft:'15vw'}}>
        <span
          className={`${currentWeatherDetails === 'f' ? 'activeUnit' : ''}`}
          onClick={setToF}
          style={{fontSize:'25px'}}
        >
          <span class='hover-weather-unit'>  °F  </span>{' '}
        </span>
        <span
          className={`${currentWeatherDetails === 'c' ? 'activeUnit' : ''}`}
          onClick={setToC}
          style={{fontSize:'25px'}}
        >
          <span class='hover-weather-unit'>  °C </span>{' '}
        </span>
        <div style={{
          fontSize:'100px', 
          border: "#bbbcc0  solid", 
          padding:'60px', 
          textAlign:"center"
          }}>
          {(temperature).toFixed()}°
        </div>
      </div>
    );
  };
  export default WeatherConverter
