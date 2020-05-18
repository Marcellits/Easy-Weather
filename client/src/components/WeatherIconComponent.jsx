import React from 'react'
import {useState} from 'react'


const WeatherIconComponent = (props) =>
{
    if (props.iconPathName) return <img src={props.iconPathName}/>;
     else { return null }
    
}





export default WeatherIconComponent