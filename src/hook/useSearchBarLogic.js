import { useContext } from 'react'
import { useWeatherData } from './useWeatherData';
import { WeatherDataContext } from '../context/weatherDataContext';

const REACT_APP_API_KEY='26d7a94801b35990d2dd98e96fe30022'
const REACT_APP_API_LINK='https://api.openweathermap.org/data/2.5'

const useSearchBarLogic = () => {
    const { state, dispatch } = useContext(WeatherDataContext);
    const { fetchWeatherData } = useWeatherData(`${REACT_APP_API_LINK}/weather?q=${state.city}&units=metric&appid=${REACT_APP_API_KEY}`);
      const handleChange = (value) => {
        if(value.length>=0){
          // console.log(value);
          dispatch({ type: 'SET_CITY', payload: value });
        }
        };
        const fetchDetails = (event) => {
          //const env = dotenv.config().parsed;
          event?.preventDefault();
          // console.log(state.city);
          fetchWeatherData();
        };
    return{handleChange,fetchDetails};
}

export default useSearchBarLogic;