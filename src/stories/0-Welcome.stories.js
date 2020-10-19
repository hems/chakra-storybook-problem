import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Box, Link } from '@chakra-ui/core'
import { useColorMode } from '@chakra-ui/core';

const Welcome = ({showApp}) => {
  const { colorMode } = useColorMode();

  console.log('got colormode ->', colorMode)

  return (
    <>
      <Box>
        This is a custom welcome message using Chakra UI
      </Box>
      <Link onClick={showApp} color="teal.500">
        Let's go to see the button
      </Link>
    </>
  )
}

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

ToStorybook.story = {
  name: 'to Storybook',
};
