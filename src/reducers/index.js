import {combineReducers} from 'redux';
import WeatherReducer from './reducer_weather';
import createStore from 'redux';

const rootReducer = combineReducers({
	weather: WeatherReducer
})

export default rootReducer;