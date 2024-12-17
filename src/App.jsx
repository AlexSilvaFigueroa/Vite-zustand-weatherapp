import { useState, useEffect } from "react";
import { Button, Container, Text, Flex, Input, Heading } from "@chakra-ui/react";
import { Field } from "./components/ui/field";
import { useLocation } from "./hooks";
import { useWeatherStore } from "./store/weather";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const { coords, error } = useLocation();
  const fetchWeather = useWeatherStore((state) => state.fetchWeather);
  const { location, current } = useWeatherStore((state) => state.weatherResponse);

  const handleButton = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (coords) fetchWeather(coords);
  }, [coords, error]);

  return (
    <>
      <Container h={100} centerContent marginBottom={5} p={2}>
        <Heading>Search your city</Heading>
        <Field label="City" required>
          <Input placeholder="New York" variant="subtle" bg="gray" />
        </Field>
      </Container>
      {/* Currently weather container section */}
      <Container h={300} bg="red" centerContent marginBottom={5} p={5}>
        <Flex minH="100%" direction="column" justify="center">
          <Text fontSize="4xl">{location?.name}</Text>
          <Text fontSize="2xl">{location?.country}</Text>
          <Text fontSize="6xl">{Math.round(current?.temp_c)}</Text>
          <Text fontSize="xl">{current?.condition?.text}</Text>
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
