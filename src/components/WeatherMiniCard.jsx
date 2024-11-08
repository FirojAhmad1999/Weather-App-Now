import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import '../assets/main.css';
import { WeatherDataContext } from '../context/weatherDataContext';

const MiniCard = ({ icon, text, cdata, unit }) => {
  const { state } = useContext(WeatherDataContext);
  
  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center',  
        alignItems: 'center',      
        height: '15vh',            // Small gap between adjacent cards
      }}
    >
      <Card 
        className={state.dark ? "card-dark" : "card-light"} 
        style={{
          width: "60%", 
          backgroundColor: "transparent", 
          color: "white", 
          boxShadow: "none",       
          margin: 0,               
        }}
      >
        <Card.Text>
          <FontAwesomeIcon icon={icon} fade /> <b>{text}</b>{" "}
        </Card.Text>
        <Card.Text><b>{cdata} {unit}</b></Card.Text>
      </Card>
    </div>
  );
}

export default MiniCard;
