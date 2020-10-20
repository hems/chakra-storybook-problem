import { ChakraProvider, Box } from "@chakra-ui/core"
import { addDecorator } from "@storybook/react"
import * as React from "react"
import { extendTheme } from '@chakra-ui/core';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  }
});


export const Chakra = ({ children }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Box p={5}>
        {children}
      </Box>
    </ChakraProvider>
  )
}

addDecorator(StoryFn => <Chakra>
  <StoryFn />
</Chakra>)
