import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";
export const FETCH_WEATHER_REJECTED = "FETCH_WEATHER_REJECTED";
export const FETCH_WEATHER_FULFILLED = "FETCH_WEATHER_FULFILLED";

const API_KEY = "1b436fa7255fb87869c2000de33af2d6";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&lang=zh_cn`;

//a more concise redux-promise-middleware method
export function fetchWeather(searchTerm) {
	let url;
	//Check how many arguments are passed to the action creator
	//1 means search by name
	//2 means search by coordinates
	if (arguments.length === 1) {
		url = `${ROOT_URL}&units=metric&q=${arguments[0]}`;
	}else{
		url = `${ROOT_URL}&units=metric&lat=${arguments[0]}&lon=${arguments[1]}`;
	}
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
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
