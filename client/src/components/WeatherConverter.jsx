import React from 'react'
import {useState} from 'react'

const props = {
    info: {
      temp_c: {},
      temp_f: {}
    }
  };
  
  const WeatherConverter = (_) => {
    const [currentWeatherDetails, setCurrentWeatherDetails] = useState('f');
  
    const tempreature =
      currentWeatherDetails === 'f' ? props.info.temp_f : props.info.temp_c;
  
    const setToF = () => setCurrentWeatherDetails('f');
  
    const setToC = () => setCurrentWeatherDetails('c');
  
    return (
      <div style={{}}>
        <div style={{}}></div>
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