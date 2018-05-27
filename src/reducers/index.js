import {combineReducers} from 'redux';
import WeatherReducer from './reducer_weather';
import ErrorReducer from './reducer_errors';

const rootReducer = combineReducers({
	weather: WeatherReducer,
	errors: ErrorReducer
})

export default rootReducer;