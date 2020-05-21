import React, { useEffect, useState } from 'react';
import { Container} from 'react-bootstrap';
import '../assets/styles/GenMessage.css'

const GenMessage = (props) => {
  const arrayMessage = [{
    desc: 'The sky is clear and sunny. Wear your sunblock and enjoy the Vitamin D!',
    codes: [1000]
  },
  {
    desc: 'The sun is shining above the clouds. Grab your friends and family for some outside activity fun.',
    codes: [1003]
  },
  {
    desc: 'It\'s cloudy and gray today. Consider taking an umbrella in case it drizzles.',
    codes: [1006, 1009, 1063]
  },
  {
    desc: 'Take an umbrella with you today, and have a plan B if you\'re planning an outdoor activity.',
    codes: [1150, 1153, 1180, 1183, 1240, 1273]
  },
  {
    desc: 'Take your umbrella and a rain coat when going outside. Your outdoor plants will be well hydrated today.',
    codes: [1186, 1189, 1192, 1243]
  },
  {
    desc: 'When it rains, it pours. Plan ahead and remember to check the windshield wiper of your car before driving.',
    codes: [1276, 1246, 1195, 1087, 1171]
  },
  {
    desc: 'Consider staying off the road today until the fog clears. Wear reflective gear if you\'re going for a walk.',
    codes: [1030, 1135, 1147]
  },
  {
    desc: 'Today is forecasted to be cold and wet. It is advisable to put on warm clothing and wear your rain boots.',
    codes: [1198, 1072, 1201]
  },
  {
    desc: 'It\'s a snow day. Don\'t forget to grab your gloves and winter hat! Considering warming up with a hot drink before leaving home.',
    codes: [1210, 1213, 1216, 1219, 1222, 1255, 1279, 1066, 1114]
  },
  {
    desc: 'It\'s better to stay home for now but don\'t worry there\'s always a calm after the storm.',
    codes: [1282, 1117, 1225, 1237, 1249, 1252, 1069, 1204, 1207, 1261, 1264]
  }]

  const [message, setMessage] = useState('');
  useEffect(() => {
    let weatherCond = props.info.condition.code;
    setMessage(arrayMessage.filter(condition => condition.codes.includes(weatherCond))[0].desc)
  }, [props.info.condition.code]);
  return (
    <Container id='weather-cond'>
      <h2 class='condition'>
        <img src={props.info.condition.icon}/>
        <p>{props.info.condition.text}</p>
      </h2>
      <h2 id='weather-message'>{message}</h2>
    </Container>
  )
}
export default GenMessage;
