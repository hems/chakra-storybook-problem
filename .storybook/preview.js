import { ChakraProvider, Box } from "@chakra-ui/core";
import { addDecorator } from "@storybook/react";
import * as React from "react";
import { extendTheme } from "@chakra-ui/core";
import theme from '../src/chakra'


export const Chakra = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
};

addDecorator((StoryFn) => (
  <Chakra>
    <StoryFn />
  </Chakra>
));
