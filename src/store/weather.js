import { create } from "zustand";
import { weatherResponse } from "../mocks/weather-api";

export const useWeatherStore = create((set) => ({
  weatherState: {},
  fetchWeather: async (coors) => {
    console.log(coors, "fetchweather coors");
    // const weather = { weatherResponse };
    set({ weatherState: weatherResponse });
  },
}));
