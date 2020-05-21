import React, { useState, useEffect } from 'react';
import Weather5days from './Weather5days';
import GenMessage from './GenMessage';
import CurrentWeatherDetails from './CurrentWeatherDetails';
import WeatherConverter from './WeatherConverter';
import Resultspagesearch from './Resultspagesearch';
import { Container,Col } from 'react-bootstrap';
import '../assets/styles/City.css'


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
      <div style={{display: 'grid', textAlign:'center', margin:'2rem'}}>
        <Resultspagesearch id="searchForm-cityPage" history={props.history} />
        <h1 style={{marginTop:'5rem', marginBottom:'0rem', fontSize:'60px', letterSpacing: '10px' }}>{(city.toUpperCase())}</h1>
      </div>
      <div>
        <Container>
            <Col >
                {cityData && (
                  <WeatherConverter id="currentTemp" fahrenheit={cityData.temp_f} celcius={cityData.temp_c} />
                )
                } 
            </Col>
            <Col >{forecastData && (
              <span>
                <CurrentWeatherDetails current={cityData} forecast={forecastData} />
              </span>
              )}
            </Col>
       </Container>     
      </div>
      {cityData && forecastData && (
        <div >
          <div id="box-middle" >
            <GenMessage info={cityData} />
          </div >
          <div id="box-bottom">
            <Weather5days forecast={forecastData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default City;
