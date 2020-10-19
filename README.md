# Repository created to reproduce

I'm trying to get chakra-ui 1.0.0-rc.5 to initiate in dark mode inside of storybook, but
i'm having issues with chakra-ui ignoring:

 - `theme.config.initialColorMode` set to `dark`
 - `<ChakraProvider>`'s initialColorMode property set to `dark`



# Additional info

This was initially forked from https://github.com/ryuheechul/helm-live/tree/chakra-storybook
and then further updated to

 - use chakra 1.0.0-rc.5
 - update src/chakra with the latest version of chakra-ui theme found on https://github.com/chakra-ui/chakra-ui/tree/develop/packages/theme/src