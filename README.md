
# ⛈ Weather App

A simple weather app built with React.js and utilizes the OpenWeatherMap API to fetch and display weather information for a given location.

#### API

The Application Programming Interface is a set of rules, regulations, and standards that allows software programs to interact with each other. It acts as a middleman between two applications, allowing them to exchange data and information.

## Features

- The application features a robust search functionality for user-friendly access.
- Ensuring a seamless experience, the UI is responsive and adapts to various devices and screen sizes.
- Users can expect precise and reliable results when utilizing the search feature.
- Current weather conditions, including temperature, humidity, wind speed, and a detailed weather description, are prominently displayed.
- The application retrieves weather data by either detecting the user's location or accepting a manually entered city name.
- In beta stage, the voice search option provides an innovative and hands-free alternative for user interaction.

## Technology Used

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
* OpenWeatherMap API
* ![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## API Details

The following details are used from the `OpenWeatherMap API`:

1. `id`: City ID.
2. `name`: City name.
3. `sys.country`: Country code (e.g., GB, JP).
4. `main.temp`: Temperature. Units: Kelvin, Celsius, Fahrenheit.
5. `main.feels_like`: Feels-like temperature, accounting for the human perception of weather.
6. `main.pressure`: Atmospheric pressure (on the sea level if no sea_level or grnd_level data), in hPa.
7. `main.humidity`: Humidity, in %.
8. `main.temp_min`: Minimum temperature observed.
9. `main.temp_max`: Maximum temperature observed.
10. `coord.lon`: Longitude of the city.
11. `coord.lat`: Latitude of the city.
12. `weather.description`: Weather condition description.
13. `weather.icon`: Weather icon ID.

## Prerequisites

* Install ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
* Install [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/) with ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
* Sign up on [OpenWeatherMap](https://openweathermap.org/api) to get your `API key`

## Run and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/FirojAhmad1999/Weather-App-Now.git
