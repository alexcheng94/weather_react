import {
  FETCH_FORECAST_PENDING,
  FETCH_FORECAST_FULFILLED,
  FETCH_FORECAST_REJECTED,
  FETCH_CURRENT_PENDING,
  FETCH_CURRENT_FULFILLED,
  FETCH_CURRENT_REJECTED
} from "../actions/index";

const initialState = {
  //isFetchingForcast is for ChartContainer to render a loader,
  //it does not concern the Chart component, this way the Chart component
  //will only rerender on _FULFILLED (i.e. state.forecast is propagated)
  //rather than rerender on every _PENDING action,
  //making chart transition between cities smoother
  isFetchingForcast: true,
  isFetchingCurrent: true,
  forecast: {},
  current: {},
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FORECAST_PENDING:
      return { ...state, isFetchingForcast: true };
    case FETCH_CURRENT_PENDING:
      return { ...state, isFetchingCurrent: true };
    case FETCH_FORECAST_FULFILLED:
      return {
        ...state,
        forecast: action.payload.data,
        isFetchingForcast: false,
        error: null
      };
    case FETCH_CURRENT_FULFILLED:
      return {
        ...state,
        isFetchingCurrent: false,
        error: null,
        current: action.payload.data
      };
    case FETCH_FORECAST_REJECTED:
      return {
        ...state,
        isFetchingCurrent: false,
        error: action.payload.response.data
      };
    case FETCH_CURRENT_REJECTED:
      return {
        ...state,
        isFetchingForcast: false,
        error: action.payload.response.data
      };
  }
  return state;
};

export default reducer;
