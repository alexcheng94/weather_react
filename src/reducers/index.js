import {
  FETCH_WEATHER_FULFILLED,
  FETCH_WEATHER_REJECTED
} from "../actions/index";

const initialState = {
  isFetching: true,
  weather: {},
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_FULFILLED:
      return {
        ...state,
        weather: action.payload.data,
        isFetching: false,
        error: null
      };
    case FETCH_WEATHER_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: action.payload.response.data
      };
  }
  return state;
};

export default reducer;
