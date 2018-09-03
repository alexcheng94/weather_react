//Calculates the data nested in state.weather,
//on which Chart depends, thus keeping the state,
//action creators and reducers clean

import moment from "moment";

export const mapData = state => type => {
  const weatherList = state.forecast.list;
  // only map data when state.weather is propagated
  if (!weatherList) {
    return null;
  }
  switch (type) {
    case "cityName":
      return state.weather.city.name;
    case "tempList":
      return weatherList.map(weatherItem => weatherItem.main.temp);
    case "timePoints":
      return weatherList.map(weatherItem => {
        const s = weatherItem.dt;
        const date = moment.unix(s).format('ddd h a')
        return date;
      });
    case "humidity":
      return weatherList.map(weatherItem => weatherItem.main.humidity);
    case "rain":
      return weatherList.map(weatherItem => {
        if (!weatherItem.rain) {
          return 0;
        } else if (!weatherItem.rain["3h"]) {
          return 0;
        } else {
          return weatherItem.rain["3h"].toFixed(2);
        }
      });
    case "description":
      return weatherList.map(weatherItem => weatherItem.weather[0].description);
    case "iconUrl":
      return weatherList.map(weatherItem => {
        return `https://openweathermap.org/img/w/${
          weatherItem.weather[0].icon
        }.png`;
      });
  }
};
