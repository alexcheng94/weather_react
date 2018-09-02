import {
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_FULFILLED,
  FETCH_WEATHER_REJECTED
} from "../actions/index";

const initialState = {
  //isFetching is for ChartContainer to render a loader,
  //it does not concern the Chart component, this way the Chart component
  //will only rerender on _FULFILLED (i.e. state.weather is propagated)
  //rather than rerender on every _PENDING action,
  //making chart transition between cities smoother
  isFetching: true,
  weather: {},
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_PENDING:
      return {...state, isFetching: true};
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
        error: action.payload.response.data || action.payload.message
      };
  }
  return state;
};

export default reducer;
