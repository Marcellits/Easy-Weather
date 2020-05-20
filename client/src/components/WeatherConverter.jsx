import React from 'react'
import {useState} from 'react'
  const WeatherConverter = (props) => {
    const [currentWeatherDetails, setCurrentWeatherDetails] = useState('f');
    const temperature =
      currentWeatherDetails === 'f' ? props.fahrenheit : props.celcius;
    const setToF = () => setCurrentWeatherDetails('f');
    const setToC = () => setCurrentWeatherDetails('c');
    return (
      <div style={{}}>
        <div style={{}}>{temperature}</div>
        <span
          className={`${currentWeatherDetails === 'f' ? 'activeUnit' : ''}`}
          onClick={setToF}
          style={{}}
        >
          °F{' '}
        </span>
        <span
          className={`${currentWeatherDetails === 'c' ? 'activeUnit' : ''}`}
          onClick={setToC}
          style={{}}
        >
          °C{' '}
        </span>
      </div>
    );
  };
  export default WeatherConverter
