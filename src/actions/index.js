import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";
export const FETCH_WEATHER_FAIL = "FETCH_WEATHER_FAIL";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";

const API_KEY = "1b436fa7255fb87869c2000de33af2d6";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&lang=zh_cn`;

export function fetchWeather(searchTerm, unit) {
	return function(dispatch) {
		//Async action is starting
		dispatch({ type: FETCH_WEATHER });

		const url = `${ROOT_URL}&units=${unit}&q=${searchTerm}`;
		axios.get(url)
			//Async action succeeded
			.then(res => {
				dispatch({ type: FETCH_WEATHER_SUCCESS, payload: res });
			})
			//Async actions failed
			.catch(err => {
				dispatch({type: FETCH_WEATHER_FAIL, error: err})
			});
	};
}
