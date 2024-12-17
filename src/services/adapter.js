const baseUrl = "https://api.weatherapi.com/v1";

const requestConfig = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const getWeatherByCurrentLocation = async ({ coords = "0 0 " }) => {
  try {
    const response = await fetch(
      `${baseUrl}/current.json?q=${coords.latitude}%20${coords.longitude}&key=${import.meta.env.VITE_WEATHER_API_KEY}`,
      requestConfig
    );
    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getWeatherByCity = async ({ city = "" }) => {
  try {
    const response = await fetch(
      `${baseUrl}/current.json?q=${city}&key=${import.meta.env.VITE_WEATHER_API_KEY}`,
      requestConfig
    );
    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.error(err);
  }
};
