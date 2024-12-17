import { create } from "zustand";
import { weatherResponse } from "../mocks/weather-api";
import { getWeatherByCurrentLocation } from "../services";

export const useWeatherStore = create((set) => {
  return {
    initialState: {},
    weatherResponse,

    fetchWeather: async (coords) => {
      const weatherResponse = await getWeatherByCurrentLocation({ coords });

      set({ weatherResponse });
    },
  };
});
