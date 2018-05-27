import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS } from "../actions/index";

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER_SUCCESS:
			return state.concat(action.payload.data);
	}
	return state;
}
