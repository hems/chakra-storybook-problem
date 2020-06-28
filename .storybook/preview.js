import CSSReset from "@chakra-ui/css-reset"
import theme from "../src/chakra"
import { ChakraProvider, Box } from "@chakra-ui/core"
import { addDecorator } from "@storybook/react"
import * as React from "react"

const newTheme = {
  ...theme,
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  }
}

export const Chakra = ({ children }) => (
  <ChakraProvider theme={newTheme}>
    <CSSReset />
    <Box p={5}>
      {children}
    </Box>
  </ChakraProvider>
)

addDecorator(StoryFn => <Chakra>
  <StoryFn />
</Chakra>)
