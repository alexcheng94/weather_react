import { FETCH_WEATHER_FAIL, FETCH_WEATHER_SUCCESS } from "../actions/index";

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER_FAIL:
			return state.concat([action.error]);
		case FETCH_WEATHER_SUCCESS:
			return state.filter((error, i)=>{i !== action.index})
	}
	return state;
}