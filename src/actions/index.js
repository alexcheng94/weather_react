import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";
export const FETCH_WEATHER_REJECTED = "FETCH_WEATHER_REJECTED";
export const FETCH_WEATHER_FULFILLED = "FETCH_WEATHER_FULFILLED";

const API_KEY = "1b436fa7255fb87869c2000de33af2d6";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&lang=zh_cn`;

export function fetchWeatherByName(searchTerm, unit) {
  //a more concise redux-promise-middleware method
  const url = `${ROOT_URL}&units=${unit}&q=${searchTerm}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };

  /*
//more verbose redux thunk method:
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
*/
}
export function fetchWeatherByGeolocation(lat,lon, unit){
	const url = `${ROOT_URL}&units=${unit}&lat=${lat}&lon=${lon}`;
	const request = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}