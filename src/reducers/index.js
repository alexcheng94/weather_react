import {
	FETCH_WEATHER_PENDING,
	FETCH_WEATHER_FULFILLED,
	FETCH_WEATHER_REJECTED
} from "../actions/index";

const initialState = {
	fetched: false,
	weather: {},
	error: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_WEATHER_FULFILLED:
			return {
				...state,
				weather: action.payload.data,
				fetched: true,
				error: null
			};
		case FETCH_WEATHER_REJECTED:
			return { ...state, error: action.payload.response.data };
	}
	return state;
};

export default reducer;
