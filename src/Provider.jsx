import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export function Provider({ children }) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}
