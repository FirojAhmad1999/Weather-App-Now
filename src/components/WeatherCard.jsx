import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/main.css";
import {
  faLocation,
  faTemperature0,
  faTemperature2,
  faTemperatureHigh,
  faRotateRight,
  faWind,
  faGaugeSimpleMed,
  faDroplet,
  faC,
  faF,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import MiniCard from "./WeatherMiniCard";
import { celciusToFarenheit } from "../util/converter";
import { ToggleSwitch } from "reactjs-toggleswitch";
import { useWeatherCardLogic } from "../hook/useWeatherCardLogic";

const WeatherCard = ({ data }) => {
  const { refresh, convertTemp, farenheit, state, background } = useWeatherCardLogic(data);

  const formatTemp = (temp) => {
    return farenheit ? celciusToFarenheit(temp) : temp;
  };

  const unit = farenheit ? "°F" : "°C";

  return (
    <Card
      className={state.dark ? "card-dark" : "card-light"}
      style={{ width: "80%", backgroundImage: `url(${background})` }}
    >
      <div className="container-card">
        <div className="column">
          <div className="image-card">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
          </div>
          <h3 className={state.dark ? "styled-text-dark" : "styled-text-light"}>
            {data.weather[0].description}
          </h3>
          <h1 className={state.dark ? "styled-text-dark" : "styled-text-light"}>
            {formatTemp(data.main.temp)}{unit}
          </h1>
          <h6 className={state.dark ? "styled-text-dark" : "styled-text-light"}>
            <b>{data.name}, {data.sys.country}</b>
          </h6>

          <ToggleSwitch
            checked={farenheit}
            thumbOnColor="#fff"
            thumbOffColor="#000"
            offColor="#fff"
            onColor="#000"
            onToggle={convertTemp}
          >
            <FontAwesomeIcon
              style={{ color: farenheit ? "#000" : "#fff" }}
              icon={farenheit ? faC : faF}
            />
          </ToggleSwitch>
        </div>

        <div className="column second">
          <div className="column-c">
            <MiniCard
              icon={faTemperatureHigh}
              text="Maximum: "
              cdata={formatTemp(data.main.temp_max)}
              unit={unit}
            />
            <MiniCard className="margin-l"
              icon={faLocation}
              text="Latitude: "
              cdata={data.coord.lat}
            />
            <MiniCard
              icon={faGaugeSimpleMed}
              text="Pressure: "
              cdata={data.main.pressure}
              unit="Pa"
            />
            <MiniCard
              icon={faWind}
              text="Wind Speed: "
              cdata={data.wind.speed}
              unit="km/hr"
            />
          </div>

          <div className="column-c">
            <MiniCard
              icon={faTemperature0}
              text="Minimum: "
              cdata={formatTemp(data.main.temp_min)}
              unit={unit}
            />
            <MiniCard
              icon={faLocation}
              text="Longitude: "
              cdata={data.coord.lon}
            />
            <MiniCard
              icon={faTemperature2}
              text="Feels Like: "
              cdata={formatTemp(data.main.feels_like)}
              unit={unit}
            />
            <MiniCard
              icon={faDroplet}
              text="Humidity: "
              cdata={data.main.humidity}
              unit="%"
            />
          </div>

          <button
            className={state.dark ? "button button-dark" : "button button-light"}
            onClick={refresh}
          >
            <FontAwesomeIcon icon={faRotateRight} spin />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default WeatherCard;
