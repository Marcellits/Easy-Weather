import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../assets/styles/Home.css';
import logo from '../assets/images/EasyWeatherLogo&Icon.png';
import Resultspagesearch from './Resultspagesearch';



const Home = (props) => {
  
  return (
    <>
      <div class="welcome-message">
        <h1>Welcome, Let's check the weather.</h1>
        <Resultspagesearch history={props.history}/>

      </div>
      <img src={logo} atl="website logo"/>
    </>
  );
};

export default Home;
