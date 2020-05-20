import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../assets/styles/Home.css';
import logo from '../assets/images/finalcloudicon3.png';
import Resultspagesearch from './Resultspagesearch';



const Home = (props) => {
  
  return (
    <div>
      <div class="welcomeMessage" class="typewrite">

        <h1 class="specialtexteffect"> <span class="typewriter"> Welcome, let's check the weather.</span> </h1>

      </div>

        <div class="searchbutton">
        <Resultspagesearch history={props.history}/>
        </div>

      <div class="logo">
      <img class="img" src={logo} atl="website logo" width="100" height="100"/>

      <h1 class="easytext" > Easy Weather </h1>
      </div>
    </div>
  );
};

export default Home;
