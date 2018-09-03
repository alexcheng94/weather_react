import axios from "axios";

export const FETCH_FORECAST = "FETCH_FORECAST";
export const FETCH_FORECAST_PENDING = "FETCH_FORECAST_PENDING";
export const FETCH_FORECAST_REJECTED = "FETCH_FORECAST_REJECTED";
export const FETCH_FORECAST_FULFILLED = "FETCH_FORECAST_FULFILLED";

export const FETCH_CURRENT = "FETCH_CURRENT";
export const FETCH_CURRENT_PENDING = "FETCH_CURRENT_PENDING";
export const FETCH_CURRENT_REJECTED = "FETCH_CURRENT_REJECTED";
export const FETCH_CURRENT_FULFILLED = "FETCH_CURRENT_FULFILLED";

const API_KEY = "1b436fa7255fb87869c2000de33af2d6";
const ROOT_URL = `https://api.openweathermap.org/data/2.5`;

function getUrl(intermediateUrl) {
	console.log('HELLLERRRRR');
	
	//arguments -> [intermediateUrl, [args]]
	//args referes to the arguments passed to the action creators,
	//its length could be 1 (city name) or 2 (lat, lon)
  if (arguments[1].length === 2) {
    return `${intermediateUrl}&q=${arguments[1]}`;
  } else {
    return `${intermediateUrl}&lat=${arguments[1]}&lon=${arguments[2]}`;
  }
}

//a more concise redux-promise-middleware method
export function fetchForecast(...args) {
  const FORECAST_URL = `${ROOT_URL}/forecast?appid=${API_KEY}&lang=zh_cn&units=metric`;
  const url = getUrl.apply(this, [FORECAST_URL, ...args]);
  const request = axios.get(url);
  return {
    type: FETCH_FORECAST,
    payload: request
  };
}

export function fetchCurrent(...args) {
  const CURRENT_URL = `${ROOT_URL}/weather?appid=${API_KEY}&lang=zh_cn&units=metric`;
  const url = getUrl.apply(this,[CURRENT_URL, ...args]);
  const request = axios.get(url);
  return {
    type: FETCH_CURRENT,
    payload: request
  };
}
/*
//more verbose redux thunk method:
	return function(dispatch) {
		//Async action is starting
		dispatch({ type: FETCH_FORECAST });
		const url = `${ROOT_URL}&units=${unit}&q=${searchTerm}`;
		axios.get(url)
			//Async action succeeded
			.then(res => {
				dispatch({ type: FETCH_FORECAST_SUCCESS, payload: res });
			})
			//Async actions failed
			.catch(err => {
				dispatch({type: FETCH_FORECAST_FAIL, error: err})
			});
	};
*/
