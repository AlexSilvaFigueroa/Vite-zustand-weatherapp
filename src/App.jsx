import { useState, useEffect } from "react";
import "./App.css";
import { Button, Container, Text, Flex } from "@chakra-ui/react";
// import { weatherResponse } from "./mocks/weather-api";
// import { getLocation } from "./utils";
// import { useEffect } from "react";
import { useLocation } from "./hooks";
import { useWeatherStore } from "./store/weather";

const App = () => {
  const [count, setCount] = useState(0);
  const { coords, error } = useLocation();
  const fetchWeather = useWeatherStore((state) => state.fetchWeather);
  const { weatherState } = useWeatherStore((state) => state.weatherState);

  const handleButton = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
    } else {
      console.error(error, "We can't get your location");
    }
  }, [coords, error, fetchWeather]);

  console.log(weatherState, "wetaher component state");

  return (
    <>
      {/* Currently weather container section */}
      <Container h={200} bg="red" centerContent marginBottom={5}>
        <Flex minH="100%" direction="column" justify="center">
          <Text fontSize="2xl">Beirut</Text>
          <Text fontSize="6xl">15</Text>
          <Text fontSize="xl">Clear</Text>
        </Flex>
      </Container>
      {/* End */}
      {/* Weekly weather dashboard section */}
      <Container h={400} bg="blue">
        <Flex minH="100%" direction="column" justify="center">
          <Text fontSize="6xl">Cork</Text>
          <Button onClick={handleButton}>Click me</Button>
          <Text>{count}</Text>
        </Flex>
      </Container>
      {/* End */}
    </>
  );
};

export default App;
