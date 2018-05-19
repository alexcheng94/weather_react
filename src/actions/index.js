import axios from "axios";

export const FETCH_WEATHER = 'FETCH_WEATHER';

const API_KEY = "1b436fa7255fb87869c2000de33af2d6";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(searchTerm, unit){
	const url = `${ROOT_URL}&units=${unit}&q=${searchTerm}`;
	const request = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}