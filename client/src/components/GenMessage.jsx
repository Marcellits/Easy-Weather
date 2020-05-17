import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import axios from 'axios';

const GenMessage = () => {
    const [arrayMessage, setArrayMessage] = useState([ "Today is going to be cold, take a coat.", 
    "Get your sunglasses and the sunscreen! Today is a good day to go to the beach.",
    "When leaving the house, it may be a good idea to take the umbrella.",
    ])



   
    //I have to connect the condition data to the array
    //and print this value 
    const weatherCond = 'snowing'
    const Message =() => {
        if (weatherCond === 'Sunny day'){
            console.log(arrayMessage[1])
        }else if (weatherCond === 'raining day' ){
            console.log (arrayMessage[2])
        } else if (weatherCond === 'snowing'){
            console.log (arrayMessage[0])
        }
    }
    Message();

    return(
        <Container>
       
    <h2>The message goes here! {arrayMessage[0]} </h2>  
       </Container>
    )
}
export default GenMessage    