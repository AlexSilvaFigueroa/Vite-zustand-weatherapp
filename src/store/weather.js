import { create } from "zustand";
import { weatherResponse } from "../mocks/weather-api";

export const useWeatherStore = create((set) => {
  return {
    initialState: {},
    weatherResponse,

    fetchWeather: async (coords) => {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?q=${coords.latitude}%20${coords.longitude}&key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      const weatherResponse = await res.json();

      set({ weatherResponse });
    },
  };
});
